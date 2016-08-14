const ABOUT = `
I am a Full Stack Developer living in London (Richmond). I specialise in Ruby
and Node.JS with experience writing React & Redux, Backbone and Angular (Ionic)
front-end applications. I take advantage of numerous AWS Services in-order to
implement automated, secure architectures for my internet-facing applications.

I am (very) experienced using Docker and implementing containers for numerous
applications and services in production environments.

Type "skills" to learn more about my knowledge and experience.
`


export function whoami() {
  this.echo(ABOUT);
}
