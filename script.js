let phone;

class Phone {
  constructor(chance) {
    console.log(chance);
    this.params = {
      outerHardware: {
        display: Math.random() < chance,
        fingerPrint: Math.random() < chance,
        multitouch: Math.random() < chance,
        touchScreen: Math.random() < chance,
        speaker: Math.random() < chance,
        microphone: Math.random() < chance,
        frontMicrophone: Math.random() < chance,
        rearMicrophone: Math.random() < chance,
        flash: Math.random() < chance,
        volumeControl: Math.random() < chance,
        frontCamera: Math.random() < chance,
        rearCamera: Math.random() < chance,
        sleepWakeButton: Math.random() < chance,
        homeButton: Math.random() < chance,
      },
      innerHardware: {
        nfc: Math.random() < chance,
        callFunction: Math.random() < chance,
        storage: Math.random() < chance,
        memory: Math.random() < chance,
        cpu: Math.random() < chance,
        vibrator: Math.random() < chance,
      },
      sensors: {
        compass: Math.random() < chance,
        connector: Math.random() < chance,
        light: Math.random() < chance,
        accelerometer: Math.random() < chance,
        gyroscope: Math.random() < chance,
        proximity: Math.random() < chance,
        pressure: Math.random() < chance,
      },
      wireless: {
        gps: Math.random() < chance,
        cellular: Math.random() < chance,
        wifi: Math.random() < chance,
      },
      screen: {
        pixelMap: `
        xxxx
        xxxx
        xxxx
        xxxx
        `,
      },
    };
  }
  generate(amount) {
    console.log(amount);
  }
  break(category, device) {
    this.params[category][device] = false;
    console.log(this);
  }
  visualise() {}
}

document.getElementById('generate').addEventListener('click', () => {
  phone = new Phone(document.getElementById('slider').value / 10.0);
  console.log(phone);
  let phoneContainer = document.getElementById('phone');
  phoneContainer.innerHTML = '';
  let keys = Object.keys(phone.params);
  keys.forEach(category => {
    let devices = '';
    Object.keys(phone.params[category]).forEach(device => {
      devices += `
      <label for="vehicle1">${device}</label>
      <input ${
        phone.params[category][device] ? 'checked' : ''
      } type="checkbox" id="device" data-category=${category} data-device=${device}><br />
      `;
    });
    phoneContainer.innerHTML += `
    <div class="category">
      <h3>${category}</h3>
      ${devices}
    </div>
    `;
  });
  document.querySelectorAll('input[type=checkbox]').forEach(elem => {
    elem.addEventListener('change', () => {
      phone.params[elem.dataset.category][elem.dataset.device] = elem.checked;
      console.log(phone.params);
    });
  });
});
