const endpointUrl = 'http://localhost:3030/'; // Replace with your actual server URL

const messageData = {
    data: {
        "var1": "CRITICAL",
        "block1": {
            varblock1: 123,
            varblock2: 'qwe'
        }
    },
    metadata: {
        "varMeta1": "OIOIOIO",
        "blockMeta1": {
            varblockMeta1: 98765,
            varblockMeta2: 'qwe'
        }
    }
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(messageData),
};

fetch(endpointUrl, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log('Message sent successfully!');
  })
  .catch((error) => console.error('Error:', error));