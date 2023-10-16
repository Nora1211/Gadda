import pandas as pd

# Load the Excel file into a Pandas DataFrame
excel_file = "OutputBook.xlsx"  # Replace with the path to your Excel file
df = pd.read_excel(excel_file)

# Convert the DataFrame to a JSON file
json_file = "output.json"  # Replace with the desired output JSON file name
df.to_json(json_file, orient="records", lines=True)
