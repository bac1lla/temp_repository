import {makeAutoObservable} from "mobx";

export default class Matrix {
    constructor() {
        this._values = []
        makeAutoObservable(this)
    }

    setMatrix(matrix) {
        this._values = matrix
    }

    generateMatrix(h, w, min, max) {
        this._values =  [...Array(w)].map(x => [...Array(h)].map(b => Math.floor(Math.random() * (max - min + 1) + min)));
    }

    get values() {
        return this._values
    }
}
