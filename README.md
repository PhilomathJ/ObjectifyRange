# ObjectifyRange

Turns a Google Sheet Range 2-dimensional array into a TypeScript object with column/row headers as keys and rest of column/row array as values

This is used to easily reference individual columns/rows within a larger range by column or row header by `object['header']`

## Syntax

```javascript
objectifyRows(arr);
objectifyColumns(arr);
```

## Parameters

`values`  
The 2-dimensional array to be converted to an object

## Return Value

An object containing all the values passed in with the first row/col as key and rest of row/col as an array as values
