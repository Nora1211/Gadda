import pandas as pd

# Read the Excel file into a DataFrame
df = pd.read_excel('CorrispondenzeVero.xlsx')

# Combine all cells into a single column
df['Combined'] = df.apply(lambda row: ''.join(map(str, row)), axis=1)

# Count occurrences of each digit from 0 to 9
digit_columns = [str(i) for i in range(10)]
for digit in digit_columns:
    df[digit] = df['Combined'].apply(lambda x: x.count(digit))

# Find the maximum occurrences
max_occurrences = df[digit_columns].sum().max()

# Identify the author with the highest occurrences
author_highest_occurrences = df.loc[df[digit_columns].sum(axis=1) == max_occurrences, 'author']

print(f"Author with the highest occurrences of numbers: {author_highest_occurrences.values[0]}")
