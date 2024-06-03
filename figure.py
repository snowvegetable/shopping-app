import matplotlib.pyplot as plt

# 定義主要事件和年份，按年份和順序排列
events = {
    2014: ["GAN"],
    2015: ["DCGAN"],
    2016: ["VAE", "Pix2pix"],
    2017: ["CycleGAN"],
    2018: ["StyleGAN"],
    2019: ["StyleGAN2", "BigGAN"],
    2020: ["VQ-VAE-2"],
    2021: ["DALL-E", "VQ-GAN", "CLIP"],
    2022: ["DALL-E 2"]
}

# 創建圖表
fig, ax = plt.subplots(figsize=(14, 8))

# 添加事件到圖表中，並避免文字重疊
for year, techs in events.items():
    y_positions = [0.1 * (i - len(techs) // 2) for i in range(len(techs))]
    for tech, y in zip(techs, y_positions):
        ax.plot(year, y, 'o', color='blue')
        ax.text(year, y + 0.05, tech, rotation=45, ha='right', fontsize=10)

# 設置圖表的美化
ax.set_ylim(-1, 1)
ax.set_xlim(2013, 2023)
ax.set_yticks([])
ax.set_xticks(range(2014, 2023))
ax.set_xlabel("Year")
ax.set_title("Timeline of AI Image Generation Techniques")

# 隱藏軸線
ax.spines['left'].set_color('none')
ax.spines['right'].set_color('none')
ax.spines['top'].set_color('none')

# 顯示圖表
plt.tight_layout()
plt.show()
