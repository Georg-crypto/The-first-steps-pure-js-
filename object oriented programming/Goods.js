class Goods {

    constructor(name, amount, storage) {

        this.name = name;
        this.amount = amount;
        this.storage = storage;

    }

    showGoods() {

        document.querySelector('#out').innerHTML = `${this.name}: ${this.amount} pcs. (${this.storage} pcs. at the storage).`;

    }

}

