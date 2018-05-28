
var request = require('request');

exports.TRISV1 = (req, res) => {

  let appliance = req.body.queryResult.parameters['Appliance'];
  let trigger = req.body.queryResult.parameters[Trigger'] ;

  var pin= '';
  if ( appliance == 'Light')
   pin='D1';
  elseif ( appliance == 'Fan')
   pin='D0';
  elseif ( appliance == 'Plug')
   pin='D2';

  var state='';
  if ( trigger == 'ON')
   state=1;
  else if ( trigger == 'OFF')
   state=0;

 request('http://188.166.206.43/108a9520b5f94806b4e5493ad4de816e/update/D2?value=0', function (error, response, body) {
  console.log('Status:', response.statusCode);
  response.json({ fulfillmentText: 'Completed Switching'});
  });

  };
