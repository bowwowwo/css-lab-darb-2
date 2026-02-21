<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>part4</title>
    <style>
            .form-div {
            width: 220px;
            }

            .form-div label {
            display: block;
            margin-top: 12px;
            margin-bottom: 4px;
            }

            .form-div input {
            width: 100%;
            padding: 4px;
            }
            .form-div button {
            margin-top: 1rem;
            padding: 4px 10px;
            }
    </style>
</head>
<body>
    <form class="form-div" action="part4_result.php" method="post">
            <label for="start">Interval start</label>
            <input type="text" id="start" name="start">

            <label for="end">Interval end</label>
            <input type="text" id="end" name="end">

        <button type="submit">Submit</button>
    </form>
</body>
</html>