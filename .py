import json
import pandas as pd

# Assuming your JSON data is in a file named 'your_data.json'
file_path = 'Book2.json'

# Read the JSON data into a list of dictionaries
with open(file_path, 'r') as file:
    data = json.load(file)

# Create a DataFrame from the list of dictionaries
df = pd.DataFrame(data)

# Group the data by 'Years' and count the number of books for each year
books_per_year = df.groupby('Years').size().reset_index(name='Number of Books')

# Convert the result to a list of dictionaries
result_list = books_per_year.to_dict(orient='records')

# Save the result to a new JSON file named 'result.json'
output_file = 'BooksByYear.json'
with open(output_file, 'w') as result_file:
    json.dump(result_list, result_file, indent=2)

print(f"Result saved to {output_file}")
