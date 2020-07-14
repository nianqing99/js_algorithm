const oldDom = {
  tagName: "div",
  props: {
    className: "box",
    id: "dom",
  },
  children: [
    {
      tagName: "li",
      props: {},
      children: [],
    },
    {
      tagName: "li",
      props: {},
      children: [],
    },
    {
      tagName: "li",
      props: {},
      children: [],
    },
  ],
};
const newDom = {
  tagName: "div",
  props: {
    className: "box",
    id: "dom",
  },
  children: [
    {
      tagName: "p",
      props: {},
      children: [],
    },
    {
      tagName: "span",
      props: {},
      children: [],
    },
    {
      tagName: "p",
      props: {},
      children: [],
    },
  ],
};
function diff(oldDom, newDom) {
  // create new node
  if (oldDom === undefined) {
    return {
      type: "create",
      vdom: newDom,
    };
  }
  // delete node
  if (newDom === undefined) {
    return {
      type: "delete",
    };
  }
  // replace node
  if (
    typeof oldDom !== typeof newDom ||
    ((typeof oldDom === "string" || typeof oldDom === "number") &&
      oldDom !== newDom) ||
    oldDom.tagName !== newDom.tagName
  ) {
    return {
      type: "replace",
      vdom: newDom,
    };
  }
  // update node
  if (oldDom.tagName) {
    const propsDiff = diffProps(oldDom, newDom);
    const childrenDiff = diffChildren(oldDom, newDom);
    if (propsDiff.length > 0 || childrenDiff.find((v) => v !== undefined)) {
      return {
        type: "update",
        props: propsDiff,
        children: childrenDiff,
      };
    }
  }
}

function diffProps(oldDom, newDom) {
  const patches = [];
  const allProps = { ...oldDom.props, ...newDom.props };
  // 获取新旧所有属性名后，再逐一判断新旧属性值
  Object.keys(allProps).forEach((key) => {
    const oldValue = oldDom.props[key];
    const newValue = newDom.props[key];
    if (newValue == undefined) {
      patches.push({
        type: 'delete',
        key,
      });
    }else if (oldValue == undefined || oldValue !== newValue) {
      patches.push({
        type: 'update',
        key,
        value: newValue,
      });
    }
  });
  return patches;
}
function diffChildren(oldDom, newDom) {
  const patches = [];
  // 获取子元素最大长度
  const childLength = Math.max(oldDom.children.length, newDom.children.length);
  // 遍历并diff子元素
  for (let i = 0; i < childLength; i++) {
    patches.push(diff(oldDom.children[i], newDom.children[i]));
  }
  return patches;
}

const patchObj = diff(oldDom, newDom);
console.log(patchObj)