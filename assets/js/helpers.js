HTMLElement.prototype.trigger = function (type, data = {}) {
    const evt = new CustomEvent(type, { detail: data });
    this.dispatchEvent(evt);
};
