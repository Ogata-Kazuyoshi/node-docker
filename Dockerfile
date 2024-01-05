FROM node:18.18.0-buster
# ワーキングディレクトリを指定。最初は存在しないのでこのフォルダを作ることになる
WORKDIR /app
# ホストマシンのルートディレクトリーをコンテナ内の/appディレクトリに丸々コピー
COPY ./ ./

RUN npm install
ENV PORT=8080

CMD npm run dev