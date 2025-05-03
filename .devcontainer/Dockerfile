FROM "mcr.microsoft.com/vscode/devcontainers/javascript-node:1.1.11-22-bookworm"

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN mkdir -p /workspace/node_modules

# 対象ファイルの権限を変更
RUN chown -R $USER_UID:$USER_GID /home/$USERNAME /workspace;