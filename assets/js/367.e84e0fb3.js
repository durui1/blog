(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{744:function(t,e,n){"use strict";n.r(e);var a=n(47),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValidateCodeUtils")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\n<%@ page import="java.util.Random"%>\n<%@ page import="java.io.OutputStream"%>\n<%@ page import="java.awt.Color"%>\n<%@ page import="java.awt.Font"%>\n<%@ page import="java.awt.Graphics"%>\n<%@ page import="java.awt.image.BufferedImage"%>\n<%@ page import="javax.imageio.ImageIO"%>\n\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<title>Insert title here</title>\n</head>\n<body>\n\n<%\n\tint width = 80;\n\tint height = 32;\n\t//create the image\n\tBufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);\n\tGraphics g = image.getGraphics();\n\t// set the background color\n\tg.setColor(new Color(0xDCDCDC));\n\tg.fillRect(0, 0, width, height);\n\t// draw the border\n\tg.setColor(Color.black);\n\tg.drawRect(0, 0, width - 1, height - 1);\n\t// create a random instance to generate the codes\n\tRandom rdm = new Random();\n\tString hash1 = Integer.toHexString(rdm.nextInt());\n\tSystem.out.print(hash1);\n\t// make some confusion\n\tfor (int i = 0; i < 50; i++) {\n\t\tint x = rdm.nextInt(width);\n\t\tint y = rdm.nextInt(height);\n\t\tg.drawOval(x, y, 0, 0);\n\t}\n\n\t// generate a random code\n\tString capstr = hash1.substring(0, 4);\n\tsession.setAttribute("key", capstr);\n\tg.setColor(new Color(0, 100, 0));\n\tg.setFont(new Font("Candara", Font.BOLD, 24));\n\tg.drawString(capstr, 8, 24);\n\tg.dispose();\n\tresponse.setContentType("image/jpeg");\n\tout.clear();\n\tout = pageContext.pushBody();\n\tOutputStream strm = response.getOutputStream();\n\tImageIO.write(image, "jpeg", strm);\n\tstrm.close();\n%>\n\n</body>\n</html>\n */')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n<img id="loginform:vCode"\n\t\tsrc="${pageContext.request.contextPath }/validatecode.jsp"\n\t\tonclick="javascript:document.getElementById(\'loginform:vCode\').src=\'${pageContext.request.contextPath }/validatecode.jsp?\'+Math.random();" />\n */')]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);