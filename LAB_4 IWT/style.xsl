<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
    <head>
        <link rel="stylesheet" type="text/css" href="style.css"></link>
    </head>
    <body>
        <h2>Pets in the area</h2>
        <table>
            <tr><th>PET ID</th><th>NAME</th><th>SPECIES</th><th>AGE</th><th>MONTHLY PET FOOD PRICE</th></tr>
            <xsl:for-each select="pets/pet">
                <tr>
                    <td><xsl:value-of select="@id"/></td>
                    <td><xsl:value-of select="name"/></td>
                    <td><xsl:value-of select="species"/></td>
                    <td><xsl:value-of select="age"/></td>
                    <td>Rs. <xsl:value-of select="food_price"/></td>
                </tr>
            </xsl:for-each>
        </table>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>
