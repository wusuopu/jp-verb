FROM node:10-alpine

RUN apk --no-cache add nginx

COPY ./rootfs/workspace/package.json ./rootfs/workspace/yarn.lock /workspace/
COPY ./rootfs/workspace/app/package.json /workspace/app/
RUN cd /workspace && yarn install && rm -rf /root/.cache /root/.npm /usr/local/share/.cache/yarn/

COPY ./rootfs/ /

WORKDIR /workspace/app

ARG SKIP_REACT_BUILD

RUN sh build.sh

#config
EXPOSE 80 3000 9009

ENV REACT_APP_CONFIG="" \
    EXTRA_HEAD_PLACEHOLDER=""

CMD ["sh", "run.sh"]
