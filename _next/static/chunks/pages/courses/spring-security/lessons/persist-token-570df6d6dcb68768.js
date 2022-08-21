(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{5231:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/spring-security/lessons/persist-token",function(){return c(3094)}])},4621:function(c,a,b){"use strict";var d=b(5893);a.Z=function(a){var c=a.src,b=a.title;return(0,d.jsxs)("div",{className:"p-3",children:[(0,d.jsx)("div",{className:"mb-3 text-secondary text-center",children:(0,d.jsx)("em",{children:b})}),(0,d.jsx)("img",{className:"img-fluid rounded border shadow",src:c,alt:b})]})}},6614:function(d,b,a){"use strict";var e=a(5893),c=a(3394),f=a.n(c);b.Z=function(a){var b=a.title,c=a.children;return(0,e.jsxs)("section",{className:"px-3 pt-1 my-5 ".concat(f().notes),children:[(0,e.jsxs)("h4",{className:"mb-3",children:[(0,e.jsx)("i",{className:"bi bi-info-circle me-2"}),void 0===b?"Note":b]}),c]})}},3094:function(f,b,a){"use strict";a.r(b);var g=a(5893),h=a(9963),i=a(130),j=a(7291),k=a(476);a(4621),a(6614);var c=a(9827),d=a(9927),e=a(358);b.default=(0,c.default)(function(b){var a=b.githubPath;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("section",{children:[(0,g.jsx)(h.nL,{children:"Persist Token"}),(0,g.jsx)(i.Z,{children:"As we mentioned in the last chapter we have to associate the generated token with the user by storing it in database to make it available for verification on subsequent requests. We will store these tokens along with the user record in the database."}),(0,g.jsxs)(i.Z,{children:["Let's modify our ",(0,g.jsx)(j.Z,{children:"AppUser"})," entity to store the token and it's expiry time like below:"]}),(0,g.jsx)(k.Z,{fileName:"AppUser.java",href:a+"/src/main/java/com/facadecode/spring/security/domain/AppUser.java",children:"\npublic class AppUser {\n    // Other fields omitted for brevity\n\n    private String token;\n\n    private Date tokenExpiryTime;\n}\n"}),(0,g.jsxs)(i.Z,{children:["Our next step is to identify the ",(0,g.jsx)(j.Z,{children:"AppUser"})," record by ",(0,g.jsx)("em",{children:"username"})," and update it with the generated token and it's expiry time. We will do this in ",(0,g.jsx)(j.Z,{children:"UserService"})," component by implementing below ",(0,g.jsx)(j.Z,{children:"updateToken()"})," method."]}),(0,g.jsx)(k.Z,{fileName:"UserService.java",href:a+"/src/main/java/com/facadecode/spring/security/service/UserService.java",children:"\npublic void updateToken(String username, String token, Date tokenExpiryTime) {\n    AppUser appUser = this.get(username);\n    appUser.setToken(token);\n    appUser.setTokenExpiryTime(tokenExpiryTime);\n    appUserRepository.save(appUser);\n}\n"}),(0,g.jsxs)(i.Z,{children:["Now we can call the above method from ",(0,g.jsx)(j.Z,{children:"AuthenticationService"})," immediately after generating the token on successful authentication."]}),(0,g.jsx)(k.Z,{fileName:"AuthenticationService.java",href:a+"/src/main/java/com/facadecode/spring/security/service/AuthenticationService.java",children:"\nif (authentication.isAuthenticated()) {\n    token = UUID.randomUUID().toString();\n    userService.updateToken(authentication.getName(), token, this.getTokenExpiryTime());\n}\n"}),(0,g.jsxs)(i.Z,{children:["Restart the application to automatically update the ",(0,g.jsx)(j.Z,{children:"APP_USER"})," table with the newly added two columns. Test the ",(0,g.jsx)("u",{children:"GenerateToken"})," API to see the generated token persisted for the given user in the ",(0,g.jsx)(j.Z,{children:"APP_USER"})," table."]})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Secure update token service"}),(0,g.jsxs)(i.Z,{children:["Are we done with persisting the token? Not Completely. We should never let anyone call the ",(0,g.jsx)(j.Z,{children:"updateToken()"})," in ",(0,g.jsx)(j.Z,{children:"UserService"})," anonymously. We have to secure every service method as part of Service Layer Security. In this case we want only the user who requested the token to update his record with the generated token."]}),(0,g.jsxs)(i.Z,{children:["Let's define the below condition as a constant in ",(0,g.jsx)(j.Z,{children:"Authority"})," class, where ",(0,g.jsx)(j.Z,{children:"#username"})," represents one of the arguments with the same name defined in ",(0,g.jsx)(j.Z,{children:"updateToken()"})," method, and ",(0,g.jsx)(j.Z,{children:"authentication"})," represents the current authenticated user provided by Spring Security from SecurityContext."]}),(0,g.jsx)(k.Z,{fileName:"Authority.java",href:a+"/src/main/java/com/facadecode/spring/security/constant/SecurityConstants.java",children:'\npublic static final String UPDATE_TOKEN = "#username == authentication.name";\n'}),(0,g.jsxs)(i.Z,{children:["Let's add the above condition to be evaluated before the execution of ",(0,g.jsx)(j.Z,{children:"updateToken()"})," using ",(0,g.jsx)(j.Z,{children:"@PreAuthroize"})," annotation."]}),(0,g.jsx)(k.Z,{fileName:"UserService.java",href:a+"/src/main/java/com/facadecode/spring/security/service/UserService.java",children:"\n@PreAuthorize(Authority.UPDATE_TOKEN)\npublic void updateToken(String username, String token, Date tokenExpiryTime) {\n    // Details omitted for brevity\n}\n"}),(0,g.jsxs)(i.Z,{children:["As we are authenticating the user using ",(0,g.jsx)(j.Z,{children:"AuthenticationManager"})," by ourselves, ",(0,g.jsx)(j.Z,{children:"SecurityContext"})," will not be aware of the ",(0,g.jsx)(j.Z,{children:"Authentication"})," object returned by the ",(0,g.jsx)(j.Z,{children:"authenticate()"})," method. Unlike Basic Auth, where everything was done out of the box by Spring Security for us, here we have to explicitly set the authenticated ",(0,g.jsx)(j.Z,{children:"Authentication"})," object in ",(0,g.jsx)(j.Z,{children:"SecurityContext"}),"."]})]}),(0,g.jsxs)("section",{children:[(0,g.jsx)(h.aC,{children:"Set authentication in SecurityContext"}),(0,g.jsxs)(i.Z,{children:["Let's define another method in ",(0,g.jsx)(j.Z,{children:"AuthenticationFacade"})," to set the ",(0,g.jsx)(j.Z,{children:"SecurityContext"})," with the authenticated ",(0,g.jsx)(j.Z,{children:"Authentication"})," object"]}),(0,g.jsx)(k.Z,{fileName:"AuthenticationFacade.java",href:a+"/src/main/java/com/facadecode/spring/security/security/AuthenticationFacade.java",children:"\n@Component\npublic class AuthenticationFacade {\n    public Authentication getAuthentication() {\n        return SecurityContextHolder.getContext().getAuthentication();\n    }\n\n    public void setAuthentication(Authentication authentication) {\n        SecurityContextHolder.getContext().setAuthentication(authentication);\n    }\n}\n"}),(0,g.jsxs)(i.Z,{children:["Lastly we will call the above ",(0,g.jsx)(j.Z,{children:"setAuthentication()"})," from ",(0,g.jsx)(j.Z,{children:"AuthenticationService"})," immediately before calling the ",(0,g.jsx)(j.Z,{children:"updateToken()"})," in ",(0,g.jsx)(j.Z,{children:"UserService"}),". The final ",(0,g.jsx)(j.Z,{children:"generateToken()"})," thus looks like below:"]}),(0,g.jsx)(k.Z,{fileName:"AuthenticationService.java",href:a+"/src/main/java/com/facadecode/spring/security/service/AuthenticationService.java",children:"\npublic String generateToken(String username, String password) {\n    Authentication authentication = UsernamePasswordAuthenticationToken.unauthenticated(username, password);\n    authentication = authenticationManager.authenticate(authentication);\n\n    String token = null;\n    if (authentication.isAuthenticated()) {        \n        token = UUID.randomUUID().toString();\n        authenticationFacade.setAuthentication(authentication);\n        userService.updateToken(authentication.getName(), token, this.getTokenExpiryTime());\n    }\n\n    return token;\n}\n\npublic Date getTokenExpiryTime() {\n    Calendar calendar = Calendar.getInstance();\n    calendar.setTime(new Date());\n    calendar.add(Calendar.MINUTE, 30);\n    return calendar.getTime();\n}\n"})]})]})},(0,e.s)(d.Z,"persist-token"))},3394:function(a){a.exports={notes:"Notes_notes__up3CK"}}},function(a){a.O(0,[116,891,637,462,774,888,179],function(){var b;return a(a.s=5231)}),_N_E=a.O()}])