<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
    <h2>CONTACT US</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>FACEBOOK PAGE</th>
      </tr>
      <xsl:for-each select="contact/one">
        <tr>
          <td><xsl:value-of select="email"/></td>
          <td><xsl:value-of select="phone"/></td>
          <td><xsl:value-of select="face"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>
