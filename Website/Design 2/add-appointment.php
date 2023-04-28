<?php

// Read the incoming appointment data from the request body
$requestBody = file_get_contents('php://input');
$appointmentData = json_decode($requestBody, true);

// Validate the appointment data
if (!$appointmentData) {
  http_response_code(400);
  echo json_encode([
    'message' => 'Invalid appointment data',
  ]);
  exit();
}

// Save the appointment data to a file or database
// ...
// Return a success message back to the client
http_response_code(200);
echo json_encode([
  'message' => 'Appointment added successfully',
]);

?>