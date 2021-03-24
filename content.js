// https://fontawesome.com/icons/youtube
const YOUTUBE = '<svg style="pointer-events: none; display: block; width: 75%; height: 75%;" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>'

const onLoad = (selector, callback) => {
  const element = $(selector);
  if (element.length) {
    callback(element);
  } else {
    window.setTimeout(() => {
      onLoad(selector, callback);
    }, 100);
  }
};

onLoad('ytmusic-player-bar ytmusic-menu-renderer', element => {
  const button = $('<paper-icon-button>')
    .attr('id', 'button')
    .attr('class', 'ytmusic-menu-renderer removeButton')
    .attr('title', 'Open in YouTube')
    .on('click', gotoYouTube);
  element.append(button);
  button.find('iron-icon').html(YOUTUBE);
});

const gotoYouTube = () => {
  const url = window.location.href.replace('music', 'www');
  window.open(url, '_blank', 'width=1280,height=650');
};
