import pandas as pd

# Assuming your Excel file is named 'your_file.xlsx'
file_path = 'OutputBooks.xlsx'

# Read the Excel file into a pandas DataFrame
df = pd.read_excel(file_path)

# Group the data by 'Years' and count the number of books for each year
books_per_year = df.groupby('Years').size().reset_index(name='Number of Books')

# Print the result
print(books_per_year)
