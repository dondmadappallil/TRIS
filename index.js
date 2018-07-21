var request = require('request');

exports.TRISV1 = (req, res) => 
{
  var pin= ''; 
  var state='';
  
  var def_res={"fulfillmentText":req.body.queryResult.fulfillmentText,"fulfillmentMessages":req.body.queryResult.fulfillmentMessages};
  res.json(def_res);
  
  let req_action = req.body.queryResult['action'];
  
  if ( req_action == 'fan_on+light_off')
  {
    pin='D0';
    state='1';
	request('http://188.166.206.43/108a9520b5f94806b4e5493ad4de816e/update/'+pin+'?value='+state, function (error, response, body) 
    {
      console.log('Status:', response.statusCode);
    });
    pin='D1';
    state ='0';
  } 
  
  if ( req_action == 'fan_off+light_on')
  {
    pin='D0';
    state ='0';
	request('http://188.166.206.43/108a9520b5f94806b4e5493ad4de816e/update/'+pin+'?value='+state, function (error, response, body) 
    {
      console.log('Status:', response.statusCode);
    });
    pin='D1';
    state ='1';
  } 
  
  
  if ( req_action == 'light_off')
  {
    pin='D1';
    state ='0';
  }  
  
  if ( req_action == 'light_on')
  {
    pin='D1';
    state ='1';
  } 
  
  if ( req_action == 'fan_off')
  {
    pin='D0';
    state ='0';
  } 
  if ( req_action == 'fan_on')
  {
    pin='D0';
    state='1';
  }  
  
 
  if ( req_action == 'control_appliance')
  {
    let appliance = req.body.queryResult.parameters['Appliance'];
    let trigger = req.body.queryResult.parameters['Trigger'];

    if ( appliance == 'Light')
     pin='D1';
    else if ( appliance == 'Fan')
     pin='D0';
    else if ( appliance == 'Plug')
     pin='D2';

    
    if ( trigger == 'ON')
     state=1;
    else if ( trigger == 'OFF')
     state=0;
  } 
  request('http://188.166.206.43/108a9520b5f94806b4e5493ad4de816e/update/'+pin+'?value='+state, function (error, response, body) 
  {
    console.log('Status:', response.statusCode);
  });

};
