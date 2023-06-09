绝对长度
1. px 一像素（pixel）。对于普通的屏幕，通常是一个设备像素（点）。 对于打印机和高分辨率屏幕，一个 CSS 像素往往占多个设备像素。
2. pt 一磅（point），72 分之一英寸。1pt = 1/12 * 1pc = 1/72 * 1in。

视口比例的长度
1. vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。
2. vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。
3. vmin：取当前vw和vh中较小的那一个值。
4. vmax：取当前vw和vh中较大的那一个值。

相对长度
1. em：相对于当前对象内文本的font-size，如果当前文本的字体尺寸没有设置，则相对于浏览器的默认字体尺寸。
2. rem：相对HTML根元素。

相对长度
1. % 是相对于父元素的大小设定的比率;
   position:absolute的元素是相对于已经定位的父元素;
   position：fixed的元素是相对可视窗口;
2. ex 这个单位表示元素font的 x-height。在含有“X”字母的字体中，它是该字体的小写字母的高度；对于很多字体来说，1ex ≈ 0.5em。
