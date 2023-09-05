<script setup lang="ts">
import Home from './components/Home.vue'

// const logosrc = chrome.runtime.getURL('assets/logo.svg')

const vue3mainDiv:HTMLDivElement = document.querySelector('#' + import.meta.env.VITE_BASE_ID)!
const minimizeDiv:HTMLDivElement = document.querySelector('#' + import.meta.env.VITE_BASE_ID + '-thumbnail')!
minimizeDiv.onclick = function () {
  minimizeDiv.style.display = 'none'
  vue3mainDiv.style.display = ''
}

// 拖拽设置宽度及位置
function dragSetSizePosition (e:MouseEvent, widthType:boolean, heightType:boolean, positionType:boolean) {
  let isMouseDown = true
  const startPageX = e.pageX
  const startPageY = e.pageY
  document.querySelector('html')!.style.userSelect = 'none'
  // 原始窗体位置
  const elOriginLeft = vue3mainDiv.offsetLeft
  const elOriginTop = vue3mainDiv.offsetTop
  // 原始窗体宽高
  const elOriginWidth = vue3mainDiv.scrollWidth
  const elOriginHeight = vue3mainDiv.scrollHeight

  // 鼠标移动
  const mousemove = (e:MouseEvent) => {
    if (!isMouseDown) return
    const currentPageX = e.pageX
    const currentPageY = e.pageY
    const moveX = currentPageX - startPageX
    const moveY = currentPageY - startPageY
    // 基础目标位置
    const targetLeft = elOriginLeft + moveX
    const targetTop = elOriginTop + moveY
    // 基础目标宽高
    const targetWidth = positionType ? elOriginWidth - moveX : elOriginWidth + moveX
    const targetHeight = elOriginHeight + moveY
    if (positionType && (targetWidth > 50 || !(widthType || heightType))) { vue3mainDiv.style.left = targetLeft + 'px' }
    if (positionType && !widthType && !heightType) { vue3mainDiv.style.top = targetTop + 'px' }
    if (widthType && targetWidth > 50) { vue3mainDiv.style.width = targetWidth + 'px' }
    if (heightType && targetHeight > 50) { vue3mainDiv.style.height = targetHeight + 'px' }
  }

  // 鼠标抬起
  const mouseup = () => {
    isMouseDown = false
    document.removeEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)
    document.onmouseup = null
    document.querySelector('html')!.style.userSelect = ''
  }

  document.addEventListener('mousemove', mousemove)

  // 开始移动
  // document.onmousemove = e => {
  //   if (!isMouseDown) return
  //   const currentPageX = e.pageX
  //   const currentPageY = e.pageY
  //   const moveX = currentPageX - startPageX
  //   const moveY = currentPageY - startPageY
  //   // 基础目标位置
  //   const targetLeft = elOriginLeft + moveX
  //   const targetTop = elOriginTop + moveY
  //   // 基础目标宽高
  //   const targetWidth = positionType ? elOriginWidth - moveX : elOriginWidth + moveX
  //   const targetHeight = elOriginHeight + moveY
  //   if (positionType && (targetWidth > 50 || !(widthType || heightType))) { vue3mainDiv.style.left = targetLeft + 'px' }
  //   if (positionType && !widthType && !heightType) { vue3mainDiv.style.top = targetTop + 'px' }
  //   if (widthType && targetWidth > 50) { vue3mainDiv.style.width = targetWidth + 'px' }
  //   if (heightType && targetHeight > 50) { vue3mainDiv.style.height = targetHeight + 'px' }
  // }
  document.addEventListener('mouseup', mouseup)

  // document.onmouseup = e => {
  //   isMouseDown = false
  //   document.onmouseup = null
  //   document.querySelector('html')!.style.userSelect = ''
  // }
}
// 最小化
function minimize () {
  vue3mainDiv.style.display = 'none'
  minimizeDiv.style.display = ''
}
</script>

<template>
  <div
    ref="dragBarRef"
    @mousedown="dragSetSizePosition($event, false, false, true)"
    class="plug-drag-bar"
  >
    <div>cherome v3插件</div>
    <div class="plug-close-win" @click.stop="minimize">
      <svg
        t="1637110923259"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1297"
        width="18"
        height="18"
      >
        <path
          d="M512 456.310154L94.247385 38.557538a39.542154 39.542154 0 0 0-55.689847 0 39.266462 39.266462 0 0 0 0 55.689847L456.310154 512 38.557538 929.752615a39.542154 39.542154 0 0 0 0 55.689847 39.266462 39.266462 0 0 0 55.689847 0L512 567.689846l417.752615 417.752616c15.163077 15.163077 40.290462 15.36 55.689847 0a39.266462 39.266462 0 0 0 0-55.689847L567.689846 512 985.442462 94.247385a39.542154 39.542154 0 0 0 0-55.689847 39.266462 39.266462 0 0 0-55.689847 0L512 456.310154z"
          p-id="1298"
        ></path>
      </svg>
    </div>
  </div>
  <div class="plug-frame-middle">
    <div
      class="plug-drag-width"
      @mousedown="dragSetSizePosition($event, true, false, true)"
    ></div>
    <div class="plug-body">
      <Home />
    </div>
    <div
      class="plug-drag-width"
      @mousedown="dragSetSizePosition($event, true, false, false)"
    ></div>
  </div>
  <div class="plug-frame-bottom">
    <div
      class="plug-drag-width-height"
      style="cursor: ne-resize"
      @mousedown="dragSetSizePosition($event, true, true, true)"
    ></div>
    <div
      class="plug-drag-height"
      @mousedown="dragSetSizePosition($event, false, true, false)"
    ></div>
    <div
      class="plug-drag-width-height"
      style="cursor: nw-resize"
      @mousedown="dragSetSizePosition($event, true, true, false)"
    ></div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
