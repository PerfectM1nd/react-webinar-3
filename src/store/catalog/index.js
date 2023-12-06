import {codeGenerator} from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {

  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0)
  }

  initState() {
    return {
      list: [],
      totalItemsCount: 0
    }
  }

  async loadItems(skip = 0, limit = 10) {
    const response = await fetch(`/api/v1/articles?limit=${limit}&skip=${skip}`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      list: json.result.items
    }, 'Загружены товары из АПИ');
  }

  async loadTotalItemsCount() {
    const response = await fetch(`/api/v1/articles?limit=1&fields=items(),count`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      totalItemsCount: json.result.count
    }, 'Загружено общее количество товаров');
  }
}

export default Catalog;
