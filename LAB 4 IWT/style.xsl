<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f8f9fa;
                text-align: center;
            }
            table {
                width: 100%;
                <!-- border-collapse: collapse; -->
                background-color:rgb(190, 163, 233);
                
            }
            th, td {
                padding: 12px;
                border: 3px solid #ddd;
                text-align: center;
            }
            th {
                background-color:rgb(183, 27, 240);
                color: white;
            }
            tr:nth-child(even) {
                background-color:rgb(192, 233, 217);
            }
        </style>
    </head>
    <body>
        <h2>List of Pets</h2>
        <table>
            <tr><th>PET ID</th><th>NAME</th><th>SPECIES</th><th>AGE</th></tr>
            <xsl:for-each select="pets/pet">
                <tr>
                    <td><xsl:value-of select="@id"/></td>
                    <td><xsl:value-of select="name"/></td>
                    <td><xsl:value-of select="species"/></td>
                    <td><xsl:value-of select="age"/></td>
                </tr>
            </xsl:for-each>
        </table>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>
