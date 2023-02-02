const axios = require('axios');
const sharp = require('sharp');

const handler = async request => {
  const { data } = await axios.get(
    'https://www.phosagro.ru/upload/iblock/505/5054945e279a7835b661c557f435767d.png',
    {
      responseType: 'arraybuffer',
    }
  );

  const { width } = request.query;

  const resized = await sharp(data)
    .resize({ width: Number(width) })
    .png()
    .toBuffer();

  const str = Buffer.from(resized, 'binary').toString('base64');

  return str;

  return { file: 'custom_page.html' }; // не возвращает ни в какую
};

const agroTest = {
  method: 'GET',
  path: 'convert',
  handler,
};

module.exports = {
  agroTest,
};
