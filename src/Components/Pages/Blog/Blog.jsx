import { Helmet } from "react-helmet";
import jwt from '../../../assets/jwt_05.jpg'
import express from '../../../assets/1686391647921.png'
import nest from '../../../assets/nestjs.png'

const Blog = () => {
    return (
        <>
        <Helmet>
        <title>JobWave | Blog</title>
        <meta name="description" content="My page description" />
      </Helmet>
      <div className="container mx-auto px-1 md:px-5">
        <div className="space-y-3">
            <img className="float-right w-1/2" src={jwt} alt="" />
            <div>
                <h1 className="text-white font-semibold text-2xl md:text-6xl">What is an access token and refresh token? How do they work and where should we
store them on the client-side?
</h1>
<p className="text-lg text-white space-y-3  md:text-xl">
Access tokens and refresh tokens in the context of JSON Web Tokens (JWT) are specific types of tokens used for authentication and authorization in web applications and APIs. They are essential components of many modern authentication systems, including OAuth 2.0 when JWTs are employed. Here&lsquo;s a detailed description of access tokens and refresh tokens in the context of JWT:<br />

<span className="font-semibold text-[#A582F7]">Access Token (JWT):</span> <br />
An access token in the form of a JWT is a digitally signed or encrypted token that is used to grant access to specific resources or services. It serves as proof of authentication and authorization, allowing a user or application to access protected data or perform authorized actions. Here&lsquo;s how access tokens work with JWTs: <br />
<span className="font-semibold text-[#A582F7]">JWT Structure:</span> <br />
An access token in JWT format typically consists of three parts: a header, a payload, and a signature. The payload of the JWT contains claims that specify the user&lsquo;s identity, permissions, and additional information relevant to the authentication context.<br />
<span className="font-semibold text-[#A582F7]">Refresh Token (JWT):</span> <br />
In the context of JWTs, refresh tokens are used to obtain new access tokens when the original token expires. They are long-lived tokens that help maintain user sessions without the need for constant reauthentication. Here&lsquo;s how refresh tokens work with JWTs:<br />
<span className="font-semibold text-[#A582F7]">JWT or Non-JWT Format:</span> <br />
Refresh tokens can be issued in both JWT and non-JWT formats. In the case of JWT-based refresh tokens, they may contain information about the user&lsquo;s identity and associated authorization scopes.

<br />
</p>
<p className="text-lg text-white">
In summary, access tokens and refresh tokens in JWT format are integral to many authentication and authorization systems, especially those using OAuth 2.0 with JWTs. Access tokens provide short-term access to resources with authorization information contained in JWT claims. Refresh tokens, on the other hand, serve as long-term authentication tokens, enabling seamless session management without constant reauthentication. Secure handling and storage of these tokens are crucial for the overall security of the system.
</p>
            </div>
        </div>

        <div className="my-10">
            <img className="w-1/3 rounded-xl float-left" src={express} alt="" />
            <img className="w-1/2 rounded-xl  float-right" src={nest} alt="" />
            <div className="clear-left">
                <h1 className="text-white font-semibold text-2xl md:text-6xl">What is express js? What is Nest JS ?</h1>
                <p className="text-lg md:text-xl text-white space-y-3">
                Express.js, commonly referred to as Express, is a minimal and flexible web application framework for Node.js, a popular runtime environment for server-side JavaScript. It provides a robust set of features and tools for building web and mobile applications, APIs, and various other server-side applications. Developed by TJ Holowaychuk and later maintained by the Node.js Foundation, Express has become one of the most popular and widely used frameworks for developing web applications in the Node.js ecosystem.<br />

<span className="font-semibold text-[#A582F7]">NestJS</span> <br />
NestJS is a popular open-source web application framework for building scalable and maintainable server-side applications using TypeScript. It&lsquo;s designed to help developers create efficient and modular applications, particularly in the context of Node.js. NestJS combines elements from both object-oriented and functional programming paradigms to provide a robust and flexible foundation for building web applications and APIs.<br /></p>
            </div>
        </div>
        </div>
        </>
    );
};

export default Blog;