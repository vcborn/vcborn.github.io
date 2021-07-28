function opendl() {
  document.querySelector('header a').setAttribute('href','javascript:closedl()');
  document.getElementsByClassName('dl')[0].style.display='inline-block';
}
function closedl() {
  document.querySelector('header a').setAttribute('href','javascript:opendl()');
  document.getElementsByClassName('dl')[0].style.display='none';
}

window.onload=()=>{
  document.body.innerHTML=`<header>
  <h1><span onclick="location.href='/'" style="top: -5px;">VCborn</span><a href="javascript:opendl()" class="neumorphism-mini">ダウンロード</a></h1>
</header>${document.body.innerHTML}`;

  document.getElementsByTagName('main')[0].innerHTML=`${document.getElementsByTagName('main')[0].innerHTML}
  <footer class="neumorphism">
    <div>
      <p><a href="/apply">参加する</a></p>
      <p><a href="/contact">連絡</a></p>
      <p><a href="/#about-el">私たちについて</a></p>
      <p><small>Copyright 2021 VCborn All rights reserved.</small></p>
    </div>
  </footer>
  <div class="neumorphism-mini dl">
    <h2>VCLinux</h2>
    <ul>
      <li><a href="/vclinux/">もっと見る</a></li>
      <li><a href="/vclinux/image/vclinux-1.0beta1.iso" target="_blank">VCLinux 1.0 Beta 1(仮)</a></li>
    </ul>
    <div style="height: 15px;"></div>
    <h2>VCLight</h2>
    <ul>
      <li><a href="/vclinux/browser">もっと見る</a></li>
      <li><a href="/vclinux/image/vclight-1.0beta1.iso" target="_blank">VCLight 1.0 Beta 1(仮)</a></li>
  </div>`;
}
