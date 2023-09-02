#!/bin/bash

# Define the loop counter and maximum iterations
counter=82
end=0

# Start the loop
while [ $counter -ge $end ]
do
  # Run your AWS CLI command here
  aws lambda delete-function --function-name aws-lambda-pages-integration-search --region us-east-1 --qualifier $counter

  # Increment the counter
  counter=$((counter-1))

  # Sleep for a desired interval (optional)
  sleep 1
done
