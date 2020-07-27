// 防抖   每次事件触发则删除原来的定时器，建立新的定时器
let debounce = function (fn, wait) {
  let timeout = null
  return (...args) => {
    if(timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
      timeout = null;
    }, wait)
  }
}

// 节流  如果在定时器的时间范围内再次触发，则不予理睬，等当前定时器完成，才能启动下一个定时器任务
const throttle = function (fn, wait) {
  let flag = true;
  return (...args) => {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true
    }, wait)
  }
}