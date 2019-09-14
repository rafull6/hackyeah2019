const hasPermission = () => {
  return new Promise((resolve, reject) => {
    window.plugins.speechRecognition.hasPermission(isGranted => {
      resolve(isGranted);
    }, err => {
      reject(err);
    });
  });
};

const requestPermission = () => {
  return new Promise((resolve, reject) => {
    window.plugins.speechRecognition.requestPermission(() => {
      resolve();
    }, () => {
      reject();
    });
  });
};

const startRecognition = () => {
  return new Promise((resolve, reject) => {
    window.plugins.speechRecognition.startListening(result => {
      resolve(result);
    }, err => {
      reject(err);
    }, {
      language: "pl-PL",
      showPopup: true
    });
  });
};

const getSupportedLanguages = () => {
  return new Promise((resolve, reject) => {
    window.plugins.speechRecognition.getSupportedLanguages(result => {
      resolve(result);
    }, err => {
      reject(err);
    });
  });
};

const isRecognitionAvailable = () => {
  return new Promise((resolve, reject) => {
    window.plugins.speechRecognition.isRecognitionAvailable(available => {
      resolve(available);
    }, err => {
      reject(err);
    });
  });
};

export const initRecognition = () => {
  return isRecognitionAvailable().then(available => {
    if (available) {
      return hasPermission();
    }
  }).then(hasPermission => {
    if (!hasPermission) {
      return requestPermission().then(() => {
        return startRecognitionWrapper();
      }).catch(err => {
        console.error("Cannot get permission", err);
      });
    } else {
      return startRecognitionWrapper();
    }
  }).catch(err => {
    console.error(err);
  });
}

const startRecognitionWrapper = () => {
  return startRecognition().then(data => data).catch(err => {
    console.error(err);
  });
}