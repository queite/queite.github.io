const createMenu = (object) => {
  const menu = {
    fetchMenu: () => object,
    consumption: [],
    order: (request) => menu.consumption.push(request),
    pay: () => {
      let total = 0;
      const menu2 = {};
      Object.assign(menu2, object.food, object.drink);
      for (let i = 0; i < menu.consumption.length; i += 1) {
        if (Object.keys(menu2).includes(menu.consumption[i])) {
          total += menu2[menu.consumption[i]];
        }
      }
      return parseFloat((total * 1.1).toFixed(2));
      },
  };
  return menu;
};

module.exports = createMenu;
