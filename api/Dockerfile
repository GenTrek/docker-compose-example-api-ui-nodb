FROM node:16.13.0-alpine
#Wollen nicht mit dem Root User arbeiten, deswegen der node user
USER node
WORKDIR /home/node
#Copieren und geben Rechte für den Benutzer und Benutzer gruppe die json
COPY --chown=node:node ./package.json ./package.json
#Für die Logs
COPY --chown=node:node ./package-lock.json ./package-lock.json
#Installieren die Node dependencies
RUN npm install --production
# kopieren die gesammte Anwendung
COPY --chown=node:node . .
#Starte die Anwendung
CMD ["node","app.js"]
