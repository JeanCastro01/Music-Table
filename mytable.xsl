<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="html" doctype-public="XSLT-compat" omit-xml-declaration="yes" encoding="UTF-8" indent="yes" />
<xsl:template match="/">å
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
    <link rel="stylesheet" href="styles.css"></link>
    <script rel="stylesheet" href="javascript.js"></script>
    <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'></link>
    <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
    <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css'></link>

    <title>Music Table</title>
</head>

<body>

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark"> <button class="navbar-toggler" type="button"
            data-target="#navigation"> <span class="navbar-toggler-icon"></span> </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item active"> <a href="index.html" class="nav-link"> Home </a> </li>
                <li class="nav-item"> <a href="mytable.html" class="nav-link"> My Music Table </a> </li>

            </ul>
        </div>
    </nav>

<div class="container d-flex justify-content-center mt-50 mb-50">
    <div class="card w-100">
        <div class="card-header header-elements-inline">
            <h5 class="card-title">Music Table Information</h5>
            <div class="header-elements">
                <div class="list-icons text-muted font-weight-light"> <a class="list-icons-item" data-action="collapse" data-abc="true"><i class="fa fa-minus font-weight-light"></i></a> <a class="list-icons-item" data-action="reload" data-abc="true"><i class="fa fa-refresh"></i></a> <a class="list-icons-item" data-action="remove" data-abc="true"><i class="fa fa-close"></i></a> </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    
                    <tr>
                   
                        <th>Artist Name</th>
                        <th>Album Name</th>
                        <th>Year Of Release</th>
                        <th>Record Label Name</th>
                        <th>Action</th>
                        
                    </tr>
                    
                </thead>
                <tbody>
                    <xsl:for-each select="/musictable/music">
                    <tr>
                        
                        <td><xsl:value-of select="Artistname"/></td>
                        <td><xsl:value-of select="Albumname"/></td>
                        <td><xsl:value-of select="YearOfRelease"/></td>
                        <td><xsl:value-of select="RecordLabelName"/></td>
                        <td> <div class="row container d-flex justify-content-center"> </div><button type="button" class="btn btn-primary btn-icon-text"> <i class="fa fa-check btn-icon-prepend"></i> Delete </button> <button type="button" class="btn btn-dark btn-icon-text"> Edit <i class="fa fa-pencil btn-icon-append"></i> </button> </td>
                          
                    </tr>
                     </xsl:for-each>
                 
                </tbody>
            </table>
        </div>
    </div>
</div>





    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>

</html>
</xsl:template>
</xsl:transform>