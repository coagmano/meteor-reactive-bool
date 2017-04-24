export const ReactiveBool = class ReactiveBool extends ReactiveVar {
    constructor(initialValue) {
        initialValue = !!initialValue;
        super(initialValue);
    }

    set(newValue) {
        super.set(!!newValue);
    }

    toggle() {
        let newValue = !this.curValue;
        super.set(newValue);
        return newValue;
    }
};
