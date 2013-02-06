<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<%--
  User: chris
  Date: 15/12/2011
  Time: 21:32
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="t" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
    <head>
        <title><t:insertAttribute name="title" ignore="true"/></title>
        <t:insertAttribute name="scripts"/>
        <t:insertAttribute name="optionalScripts" ignore="true"/>
    </head>
    <body>
        <t:insertAttribute name="header"/>
        <t:insertAttribute name="menu"/>
        <t:insertAttribute name="content"/>
        <t:insertAttribute name="footer"/>
    </body>
</html>