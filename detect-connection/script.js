const wrapper = document.querySelector('.wrapper');
const toast = wrapper.querySelector('.toast');
const title = toast.querySelector('span');
const subTitle = toast.querySelector('p');
const wifiIcon = toast.querySelector('.icon');
const closeIcon = toast.querySelector('.close-icon');

const wifiSymbol = document.querySelector('.wifi-icon');

const state = {
  online: true,
  hasSeenOnline: false,
};

window.ononline = () => {
  console.log('you are online');
  state.online = true;

  wifiSymbol.classList.remove('offline');
  wifiSymbol.innerHTML = '<i class="uil uil-wifi"></i>';

  onlineToast();
}

window.onoffline = () => {
  console.log('you are offline');
  state.online = false;
  state.hasSeenOnline = false;
  wifiSymbol.classList.add('offline');
  wifiSymbol.innerHTML = '<i class="uil uil-wifi-slash"></i>';
  offlineToast();
}

const onlineToast = () => {
  if (state.hasSeenOnline) return;
  if (wrapper.classList.contains('hide')) {
    wrapper.classList.remove('hide');
  }
  toast.classList.remove('offline');
  title.innerText = "You're online now";
  subTitle.innerText = 'Hurray! Internet is connected.';
  wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

  wifiSymbol.classList.remove('offline');
  wifiSymbol.innerHTML = '<i class="uil uil-wifi"></i>';
  setTimeout(() => {
    wrapper.classList.add('hide');
    state.hasSeenOnline = true;
  }, 5000);
}

const offlineToast = () => {
  if (wrapper.classList.contains('hide')) {
    wrapper.classList.remove('hide');
  }
  // wrapper.classList.remove('hide');
  toast.classList.add('offline');
  title.innerText = "You're offline now";
  subTitle.innerText = "Oops! Internet is disconnected.";
  wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';

  wifiSymbol.classList.add('offline');
  wifiSymbol.innerHTML = '<i class="uil uil-wifi-slash"></i>';
};

const checkOnlineStatus = async () => {
  try {
    const online = await fetch('https://jsonplaceholder.typicode.com/posts');
    state.online = online.status >= 200 && online.status < 300;
    return online.status >= 200 && online.status < 300;
  } catch (err) {
    state.online = false;
    return false;
  }
};

const myDataRequestFunc = async () => {
  const online = await checkOnlineStatus();
  if (online) {
    // make data request
  }
}

closeIcon.onclick = () => {
  console.log('click');
  wrapper.classList.add('hide');

  if (!toast.classList.contains('offline')) {
    state.hasSeenOnline = true;
  }
  console.log(wrapper.classList);
}

window.onload = async () => {
  state.online = await checkOnlineStatus();
  setInterval(async () => {
    const result = await checkOnlineStatus();
    console.log('online:', result);
    if (result) {
      onlineToast();
    } else {
      offlineToast();
    }
  }, 10000);
}