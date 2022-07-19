# SSL/TLS

## The many different ways to add a self signed cert/private root cert/Certificate Authority

Because I'm sick and tired of googling all over again for how to do it for different environments, apps and languages. List will be expanded on whenever I have to implement such support and none of the below options work.

### Linux command-line tools

To [make CA certificates available to Linux command-line tools](https://superuser.com/a/719047) or generally most built binary files that will reference the CA store used by the OS.

#### Ubuntu/Debian

- Have `ca-certificates` installed.
- Place the CA in `/usr/local/share/ca-certificates/` ending with `.crt`. e.g. `/usr/local/share/ca-certificates/rootca.crt`
- Run `update-ca-certificates` (or `sudo update-ca-certificates`)

#### Alpine Linux

The above works too, but if you do not want `ca-certificates` installed (or can't have it installed, e.g. when using a 3rd party built docker image), we can [append it straight to the list of root CAs](https://stackoverflow.com/questions/67231714/how-to-add-trusted-root-ca-to-docker-alpine).

- Find the list of root CAs. It could be in `/etc/ssl/certs/ca-certificates.crt`, but I have seen it in `/etc/ssl/cert.pem` before too.
- Append the cert. E.g. `cat /usr/local/share/ca-certificates/rootca.crt >> /etc/ssl/cert.pem`

### Java

Java apps do not seem to take `update-ca-certificates` changes into consideration. It uses its own keystore. Do something like this:

```bash
keytool -import -noprompt -v -trustcacerts -alias rpcrootca -file /usr/local/share/ca-certificates/rootca.crt -keystore $JAVA_HOME/lib/security/cacerts -keypass changeit -storepass changeit;
```

### Nodejs

Nodejs does not seem to take `update-ca-certificates` changes into consideration either. [Add cert by referencing the path to the extra cert](https://levelup.gitconnected.com/how-to-resolve-certificate-errors-in-nodejs-app-involving-ssl-calls-781ce48daded) with the environment variable `NODE_EXTRA_CA_CERTS`. E.g. `NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/rootca.crt`
