#!/bin/bash

# Armed Exterminators - Page Generator Script
# This script helps create new service + location combination pages

# Arrays of services and locations
declare -a services=("rat-control" "mouse-control" "ant-control" "roach-control" "spider-control" "bed-bug-treatment" "wasp-removal" "flea-treatment")
declare -a locations=("arcadia" "monrovia" "pasadena" "san-gabriel" "san-marino" "altadena" "south-pasadena" "sierra-madre" "la-canada-flintridge" "rosemead")

# Function to create a service-location page
create_page() {
    local service=$1
    local location=$2
    local filename="${service}-${location}.md"
    
    echo "Creating page: $filename"
    
    # Copy template and replace placeholders
    # This is a simplified example - you'd need to customize for each combination
    cp content/templates/service-location-template.md "content/$filename"
    
    # You would then use sed or another tool to replace placeholders
    # For example:
    # sed -i '' "s/\[Service\]/Rat Control/g" "content/$filename"
    # sed -i '' "s/\[Location\]/Arcadia/g" "content/$filename"
    
    echo "Created: content/$filename"
}

# Example usage:
# create_page "rat-control" "monrovia"

# To generate all combinations (be careful - this creates many files!):
# for service in "${services[@]}"; do
#     for location in "${locations[@]}"; do
#         create_page "$service" "$location"
#     done
# done

echo "Page generator ready. Use create_page function to generate new pages."