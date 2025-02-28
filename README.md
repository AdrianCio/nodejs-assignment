# Run

`npm start`

# Test

`npm test`

# FFP Coding Challenge (Go)

## The Problem 🔮

Our crack team of data scientists recently developed a new methodology to predict the future. For
each day of the next year, they can estimate the amount of **orders** a store will handle, and how
much **revenue** they are expected to have. They call it a **forecast**.

A forecast that they produce looks like this:

| date       | country | store         | expected_orders | expected_sales_eur |
| ---------- | ------- | ------------- | --------------- | ------------------ |
| 2025-02-01 | NL      | 001.Amsterdam | 1840            | 286140             |
| 2025-02-01 | NL      | 003.Utrecht   | 732             | 64380              |
| 2025-02-01 | BE      | 092.Antwerp   | 924             | 78215              |
| 2025-02-02 | NL      | 001.Amsterdam | 1471            | 173381             |
| ...        | ...     | ...           | ...             | ...                |

The data scientists will make this data available to us as a CSV file. We want to make
this data visible to **store managers**. in the form of a dashboard. **How do we go from this CSV
file to the production app?**

## The Data 💾

A sample data set is available in CSV and JSON formats in the `data/` directory. You can pick the
format that you feel is best.