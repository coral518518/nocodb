FROM nocodb/nocodb:latest

# 限制 Node.js 最大老生代内存，防止免费容器冷启动瞬间 OOM 被强杀
# 如果你的 DeployVera 实例配额只有 256MB 内存，请将 320 改为 200
ENV NODE_OPTIONS="--max-old-space-size=320"

# 关闭内置遥测与版本检查，减少启动时的额外网络与内存开销
ENV NC_DISABLE_TELE="true"

# 显式声明监听端口
ENV PORT="8080"
EXPOSE 8080
