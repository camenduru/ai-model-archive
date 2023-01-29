import { Grid, html } from "gridjs";

const grid = new Grid({
    sort: true,
    resizable: true,
    search: true,
    pagination: true,
    columns: [{
        id: 'creator_username',
        name: 'creator_username',
        formatter: (cell) => html(`<b>${cell}</b>`)
     }, {
        id: 'model_name',
        name: 'model_name'
     }, {
        id: 'model_version',
        name: 'model_version'
     }, {
        id: 'links',
        name: 'links'
     }, {
        id: 'tokens',
        name: 'tokens'
     }, {
        id: 'online',
        name: 'online'
     }, {
        id: 'images',
        name: 'images'
     }, {
        id: 'info',
        name: 'info'
     }],
     data: [
        {
            "creator_username": "22h",
            "images": [
                "https://aica.pages.dev/creators/22h/vintedois_diffusion/010/1.png",
                "https://aica.pages.dev/creators/22h/vintedois_diffusion/010/2.png",
                "https://aica.pages.dev/creators/22h/vintedois_diffusion/010/3.png",
                "https://aica.pages.dev/creators/22h/vintedois_diffusion/010/4.png"
            ],
            "info": "https://aica.pages.dev/creators/22h/vintedois_diffusion/010/info.txt",
            "links": [
                "https://huggingface.co/ckpt/vintedois-diffusion-v0-1/resolve/main/vintedois_0_1.ckpt"
            ],
            "model_name": "vintedois_diffusion",
            "model_version": "010",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/vintedois_diffusion_0_1_webui_colab.ipynb"
            ],
            "tokens": [
                "estilovintedois"
            ]
        },
        {
            "creator_username": "852wa",
            "images": [
                "https://aica.pages.dev/creators/852wa/8528_diffusion/100/1.png",
                "https://aica.pages.dev/creators/852wa/8528_diffusion/100/2.png",
                "https://aica.pages.dev/creators/852wa/8528_diffusion/100/3.png",
                "https://aica.pages.dev/creators/852wa/8528_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/852wa/8528_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/8528-diffusion/resolve/main/8528d-final.ckpt"
            ],
            "model_name": "8528_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/8528_diffusion_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "aipicasso",
            "images": [
                "https://aica.pages.dev/creators/aipicasso/cool_japan_diffusion/210/1.png",
                "https://aica.pages.dev/creators/aipicasso/cool_japan_diffusion/210/2.png",
                "https://aica.pages.dev/creators/aipicasso/cool_japan_diffusion/210/3.png",
                "https://aica.pages.dev/creators/aipicasso/cool_japan_diffusion/210/4.png"
            ],
            "info": "https://aica.pages.dev/creators/aipicasso/cool_japan_diffusion/210/info.txt",
            "links": [
                "https://huggingface.co/ckpt/cool-japan-diffusion-2-1-0/resolve/main/v2-1-0.ckpt"
            ],
            "model_name": "cool_japan_diffusion",
            "model_version": "210",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/cool_japan_diffusion_2_1_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "alexds9",
            "images": [
                "https://aica.pages.dev/creators/alexds9/babes/100/1.png",
                "https://aica.pages.dev/creators/alexds9/babes/100/2.png",
                "https://aica.pages.dev/creators/alexds9/babes/100/3.png",
                "https://aica.pages.dev/creators/alexds9/babes/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/alexds9/babes/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/babes/resolve/main/babes_11.safetensors"
            ],
            "model_name": "babes",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/babes_blend_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "amethyst_vera",
            "images": [
                "https://aica.pages.dev/creators/amethyst_vera/simp_maker_3k1/100/1.png",
                "https://aica.pages.dev/creators/amethyst_vera/simp_maker_3k1/100/2.png",
                "https://aica.pages.dev/creators/amethyst_vera/simp_maker_3k1/100/3.png",
                "https://aica.pages.dev/creators/amethyst_vera/simp_maker_3k1/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/amethyst_vera/simp_maker_3k1/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/SimpMaker-3K1/resolve/main/SimpMaker%203k.ckpt",
                "https://huggingface.co/ckpt/SimpMaker-3K1/resolve/main/SimpMaker%203k1.ckpt",
                "https://huggingface.co/ckpt/SimpMaker-3K1/resolve/main/SimpMaker%203k2.ckpt",
                "https://huggingface.co/ckpt/SimpMaker-3K1/resolve/main/SimpMaker%203k3.ckpt"
            ],
            "model_name": "simp_maker_3k1",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/simpmaker_3k_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "andite",
            "images": [
                "https://aica.pages.dev/creators/andite/anything/400/1.png",
                "https://aica.pages.dev/creators/andite/anything/400/2.png",
                "https://aica.pages.dev/creators/andite/anything/400/3.png",
                "https://aica.pages.dev/creators/andite/anything/400/4.png"
            ],
            "info": "https://aica.pages.dev/creators/andite/anything/400/info.txt",
            "links": [
                "https://huggingface.co/ckpt/anything-v4.0/resolve/main/anything-v4.0-pruned.ckpt",
                "https://huggingface.co/ckpt/anything-v4.0/resolve/main/anything-v4.5-pruned.ckpt"
            ],
            "model_name": "anything",
            "model_version": "400",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/anything_4_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "andite",
            "images": [
                "https://aica.pages.dev/creators/andite/yohan_diffusion/100/1.png",
                "https://aica.pages.dev/creators/andite/yohan_diffusion/100/2.png",
                "https://aica.pages.dev/creators/andite/yohan_diffusion/100/3.png",
                "https://aica.pages.dev/creators/andite/yohan_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/andite/yohan_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/yohan-diffusion/resolve/main/yohan-diffusion.ckpt",
                "https://huggingface.co/ckpt/yohan-diffusion/resolve/main/Cocoa.ckpt"
            ],
            "model_name": "yohan_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/yohan_diffusion_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "astralite_heart",
            "images": [
                "https://aica.pages.dev/creators/astralite_heart/pony_diffusion/200/1.png",
                "https://aica.pages.dev/creators/astralite_heart/pony_diffusion/200/2.png",
                "https://aica.pages.dev/creators/astralite_heart/pony_diffusion/200/3.png",
                "https://aica.pages.dev/creators/astralite_heart/pony_diffusion/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/astralite_heart/pony_diffusion/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/pony-diffusion-v2/resolve/main/pony-diffusion-v2.ckpt"
            ],
            "model_name": "pony_diffusion",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/pony_diffusion_2_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "aybeeceedee",
            "images": [
                "https://aica.pages.dev/creators/aybeeceedee/knollingcase/100/1.png",
                "https://aica.pages.dev/creators/aybeeceedee/knollingcase/100/2.png",
                "https://aica.pages.dev/creators/aybeeceedee/knollingcase/100/3.png",
                "https://aica.pages.dev/creators/aybeeceedee/knollingcase/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/aybeeceedee/knollingcase/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/knollingcase/resolve/main/knollingcase.ckpt"
            ],
            "model_name": "knollingcase",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/knollingcase_webui_colab.ipynb"
            ],
            "tokens": [
                "knollingcase"
            ]
        },
        {
            "creator_username": "basunat",
            "images": [
                "https://aica.pages.dev/creators/basunat/cinematic_diffusion/100/1.png",
                "https://aica.pages.dev/creators/basunat/cinematic_diffusion/100/2.png",
                "https://aica.pages.dev/creators/basunat/cinematic_diffusion/100/3.png",
                "https://aica.pages.dev/creators/basunat/cinematic_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/basunat/cinematic_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Cinematic-Diffusion/resolve/main/syberart.ckpt"
            ],
            "model_name": "cinematic_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/cinematic_diffusion_webui_colab.ipynb"
            ],
            "tokens": [
                "syberart"
            ]
        },
        {
            "creator_username": "best_jammer",
            "images": [
                "https://aica.pages.dev/creators/best_jammer/hasdx/400/1.png",
                "https://aica.pages.dev/creators/best_jammer/hasdx/400/2.png",
                "https://aica.pages.dev/creators/best_jammer/hasdx/400/3.png",
                "https://aica.pages.dev/creators/best_jammer/hasdx/400/4.png"
            ],
            "info": "https://aica.pages.dev/creators/best_jammer/hasdx/400/info.txt",
            "links": [
                "https://huggingface.co/ckpt/hasdx/resolve/main/hasdx_emaonly.ckpt"
            ],
            "model_name": "hasdx",
            "model_version": "400",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/hasdx_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "cafeai",
            "images": [
                "https://aica.pages.dev/creators/cafeai/cafe_instagram_sd_1_5/600/1.png",
                "https://aica.pages.dev/creators/cafeai/cafe_instagram_sd_1_5/600/2.png",
                "https://aica.pages.dev/creators/cafeai/cafe_instagram_sd_1_5/600/3.png",
                "https://aica.pages.dev/creators/cafeai/cafe_instagram_sd_1_5/600/4.png"
            ],
            "info": "https://aica.pages.dev/creators/cafeai/cafe_instagram_sd_1_5/600/info.txt",
            "links": [
                "https://huggingface.co/ckpt/cafe-instagram-sd-1-5-v6/resolve/main/instagram-latest-plus-clip-v6e1_50000.safetensors"
            ],
            "model_name": "cafe_instagram_sd_1_5",
            "model_version": "600",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/cafe_instagram_v6_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "chilon249",
            "images": [
                "https://aica.pages.dev/creators/chilon249/yiffy_mix/100/1.png",
                "https://aica.pages.dev/creators/chilon249/yiffy_mix/100/2.png",
                "https://aica.pages.dev/creators/chilon249/yiffy_mix/100/3.png",
                "https://aica.pages.dev/creators/chilon249/yiffy_mix/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/chilon249/yiffy_mix/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/yiffymix/resolve/main/yiffymix.safetensors"
            ],
            "model_name": "yiffy_mix",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/yiffy_mix_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "claudfuen",
            "images": [
                "https://aica.pages.dev/creators/claudfuen/photorealistic_fuen/100/1.png",
                "https://aica.pages.dev/creators/claudfuen/photorealistic_fuen/100/2.png",
                "https://aica.pages.dev/creators/claudfuen/photorealistic_fuen/100/3.png",
                "https://aica.pages.dev/creators/claudfuen/photorealistic_fuen/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/claudfuen/photorealistic_fuen/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/photorealistic-fuen-v1/resolve/main/photorealistic-fuen-v1.ckpt"
            ],
            "model_name": "photorealistic_fuen",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/photorealistic_fuen_v1_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "comp_vis",
            "images": [
                "https://aica.pages.dev/creators/comp_vis/stable_diffusion_original/140/1.png",
                "https://aica.pages.dev/creators/comp_vis/stable_diffusion_original/140/2.png",
                "https://aica.pages.dev/creators/comp_vis/stable_diffusion_original/140/3.png",
                "https://aica.pages.dev/creators/comp_vis/stable_diffusion_original/140/4.png"
            ],
            "info": "https://aica.pages.dev/creators/comp_vis/stable_diffusion_original/140/info.txt",
            "links": [
                "https://huggingface.co/ckpt/sd14/resolve/main/sd-v1-4.ckpt"
            ],
            "model_name": "stable_diffusion_original",
            "model_version": "140",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable_diffusion_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "conflictx",
            "images": [
                "https://aica.pages.dev/creators/conflictx/complex_lineart/100/1.png",
                "https://aica.pages.dev/creators/conflictx/complex_lineart/100/2.png",
                "https://aica.pages.dev/creators/conflictx/complex_lineart/100/3.png",
                "https://aica.pages.dev/creators/conflictx/complex_lineart/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/conflictx/complex_lineart/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Complex-Lineart/resolve/main/ComplexLA%20Style.ckpt"
            ],
            "model_name": "complex_lineart",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/complex_lineart_webui_colab.ipynb"
            ],
            "tokens": [
                "ComplexLA style"
            ]
        },
        {
            "creator_username": "coreco",
            "images": [
                "https://aica.pages.dev/creators/coreco/seek_art_mega/100/1.png",
                "https://aica.pages.dev/creators/coreco/seek_art_mega/100/2.png",
                "https://aica.pages.dev/creators/coreco/seek_art_mega/100/3.png",
                "https://aica.pages.dev/creators/coreco/seek_art_mega/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/coreco/seek_art_mega/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/seek.art_MEGA/resolve/main/seek_art_mega_v1.ckpt"
            ],
            "model_name": "seek_art_mega",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/seek_art_mega_v1_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "dallinmackay",
            "images": [
                "https://aica.pages.dev/creators/dallinmackay/van_gogh_diffusion/200/1.png",
                "https://aica.pages.dev/creators/dallinmackay/van_gogh_diffusion/200/2.png",
                "https://aica.pages.dev/creators/dallinmackay/van_gogh_diffusion/200/3.png",
                "https://aica.pages.dev/creators/dallinmackay/van_gogh_diffusion/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/dallinmackay/van_gogh_diffusion/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Van-Gogh-diffusion/resolve/main/Van-Gogh-Style-lvngvncnt-v2.ckpt"
            ],
            "model_name": "van_gogh_diffusion",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/van_gogh_diffusion_webui_colab.ipynb"
            ],
            "tokens": [
                "lvngvncnt style"
            ]
        },
        {
            "creator_username": "dg_spitzer",
            "images": [
                "https://aica.pages.dev/creators/dg_spitzer/cyberpunk_anime_diffusion/100/1.png",
                "https://aica.pages.dev/creators/dg_spitzer/cyberpunk_anime_diffusion/100/2.png",
                "https://aica.pages.dev/creators/dg_spitzer/cyberpunk_anime_diffusion/100/3.png",
                "https://aica.pages.dev/creators/dg_spitzer/cyberpunk_anime_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/dg_spitzer/cyberpunk_anime_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Cyberpunk-Anime-Diffusion/resolve/main/Cyberpunk-Anime-Diffusion.ckpt"
            ],
            "model_name": "cyberpunk_anime_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/cyberpunk_anime_diffusion_webui_colab.ipynb"
            ],
            "tokens": [
                "dgs illustration style"
            ]
        },
        {
            "creator_username": "doubleyobro",
            "images": [
                "https://aica.pages.dev/creators/doubleyobro/yiffy_e18/100/1.png",
                "https://aica.pages.dev/creators/doubleyobro/yiffy_e18/100/2.png",
                "https://aica.pages.dev/creators/doubleyobro/yiffy_e18/100/3.png",
                "https://aica.pages.dev/creators/doubleyobro/yiffy_e18/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/doubleyobro/yiffy_e18/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/yiffy-e18/resolve/main/yiffy-e18.ckpt"
            ],
            "model_name": "yiffy_e18",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/yiffy_e18_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "dreamlike_art",
            "images": [
                "https://aica.pages.dev/creators/dreamlike_art/dreamlike_diffusion/100/1.png",
                "https://aica.pages.dev/creators/dreamlike_art/dreamlike_diffusion/100/2.png",
                "https://aica.pages.dev/creators/dreamlike_art/dreamlike_diffusion/100/3.png",
                "https://aica.pages.dev/creators/dreamlike_art/dreamlike_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/dreamlike_art/dreamlike_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/dreamlike-diffusion-1.0/resolve/main/dreamlike-diffusion-1.0.ckpt"
            ],
            "model_name": "dreamlike_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/dreamlike_diffusion_1_webui_colab.ipynb"
            ],
            "tokens": [
                "dreamlikeart style"
            ]
        },
        {
            "creator_username": "dreamlike_art",
            "images": [
                "https://aica.pages.dev/creators/dreamlike_art/dreamlike_photoreal/200/1.png",
                "https://aica.pages.dev/creators/dreamlike_art/dreamlike_photoreal/200/2.png",
                "https://aica.pages.dev/creators/dreamlike_art/dreamlike_photoreal/200/3.png",
                "https://aica.pages.dev/creators/dreamlike_art/dreamlike_photoreal/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/dreamlike_art/dreamlike_photoreal/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/dreamlike-photoreal-2.0/resolve/main/dreamlike-photoreal-2.0.safetensors"
            ],
            "model_name": "dreamlike_photoreal",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/dreamlike_photoreal_2_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "duc_haiten",
            "images": [
                "https://aica.pages.dev/creators/duc_haiten/duc_haiten_ai_art/011/1.png",
                "https://aica.pages.dev/creators/duc_haiten/duc_haiten_ai_art/011/2.png",
                "https://aica.pages.dev/creators/duc_haiten/duc_haiten_ai_art/011/3.png",
                "https://aica.pages.dev/creators/duc_haiten/duc_haiten_ai_art/011/4.png"
            ],
            "info": "https://aica.pages.dev/creators/duc_haiten/duc_haiten_ai_art/011/info.txt",
            "links": [
                "https://huggingface.co/ckpt/DucHaitenAIart_v1.1a/resolve/main/DucHaitenAIart_v1.1a_emaonly.ckpt",
                "https://huggingface.co/ckpt/DucHaitenAIart_v2.0/resolve/main/DucHaitenAIart_v2.0-emaonly.safetensors",
                "https://huggingface.co/DucHaiten/DucHaitenDarkside/resolve/main/DucHaitenDarkside_v1.0.safetensors"
            ],
            "model_name": "duc_haiten_ai_art",
            "model_version": "011",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/duchaitenaiart_v1_1_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "eimiss",
            "images": [
                "https://aica.pages.dev/creators/eimiss/eimis_anime_diffusion/100/1.png",
                "https://aica.pages.dev/creators/eimiss/eimis_anime_diffusion/100/2.png",
                "https://aica.pages.dev/creators/eimiss/eimis_anime_diffusion/100/3.png",
                "https://aica.pages.dev/creators/eimiss/eimis_anime_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/eimiss/eimis_anime_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/EimisAnimeDiffusion_1.0v/resolve/main/EimisAnimeDiffusion_1-0v.ckpt"
            ],
            "model_name": "eimis_anime_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/eimis_anime_diffusion_1_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "envvi",
            "images": [
                "https://aica.pages.dev/creators/envvi/inkpunk_diffusion/100/1.png",
                "https://aica.pages.dev/creators/envvi/inkpunk_diffusion/100/2.png",
                "https://aica.pages.dev/creators/envvi/inkpunk_diffusion/100/3.png",
                "https://aica.pages.dev/creators/envvi/inkpunk_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/envvi/inkpunk_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Inkpunk-Diffusion/resolve/main/Inkpunk-Diffusion-v2.ckpt"
            ],
            "model_name": "inkpunk_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/inkpunk_webui_colab.ipynb"
            ],
            "tokens": [
                "nvinkpunk style"
            ]
        },
        {
            "creator_username": "fiacr",
            "images": [
                "https://aica.pages.dev/creators/fiacr/comics_blend/100/1.png",
                "https://aica.pages.dev/creators/fiacr/comics_blend/100/2.png",
                "https://aica.pages.dev/creators/fiacr/comics_blend/100/3.png",
                "https://aica.pages.dev/creators/fiacr/comics_blend/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/fiacr/comics_blend/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/comicsblend/resolve/main/comicsblend_V1.ckpt"
            ],
            "model_name": "comics_blend",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/comics_blend_webui_colab.ipynb"
            ],
            "tokens": [
                "ComplexLA style",
                "nvinkpunk",
                "marioalberti artstyle",
                "ghibli style"
            ]
        },
        {
            "creator_username": "fictiverse",
            "images": [
                "https://aica.pages.dev/creators/fictiverse/stable_diffusion_paper_cut_model/100/1.png",
                "https://aica.pages.dev/creators/fictiverse/stable_diffusion_paper_cut_model/100/2.png",
                "https://aica.pages.dev/creators/fictiverse/stable_diffusion_paper_cut_model/100/3.png",
                "https://aica.pages.dev/creators/fictiverse/stable_diffusion_paper_cut_model/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/fictiverse/stable_diffusion_paper_cut_model/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Stable_Diffusion_PaperCut_Model/resolve/main/PaperCut_v1.ckpt"
            ],
            "model_name": "stable_diffusion_paper_cut_model",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/papercut_diffusion_webui_colab.ipynb"
            ],
            "tokens": [
                "PaperCut"
            ]
        },
        {
            "creator_username": "gsdf",
            "images": [
                "https://aica.pages.dev/creators/gsdf/counterfeit/200/1.png",
                "https://aica.pages.dev/creators/gsdf/counterfeit/200/2.png",
                "https://aica.pages.dev/creators/gsdf/counterfeit/200/3.png",
                "https://aica.pages.dev/creators/gsdf/counterfeit/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/gsdf/counterfeit/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Counterfeit-V2.0/resolve/main/Counterfeit-V2.0fp16.safetensors"
            ],
            "model_name": "counterfeit",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/counterfeit_v2_0_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "hakurei",
            "images": [
                "https://aica.pages.dev/creators/hakurei/waifu_diffusion/130/1.png",
                "https://aica.pages.dev/creators/hakurei/waifu_diffusion/130/2.png",
                "https://aica.pages.dev/creators/hakurei/waifu_diffusion/130/3.png",
                "https://aica.pages.dev/creators/hakurei/waifu_diffusion/130/4.png"
            ],
            "info": "https://aica.pages.dev/creators/hakurei/waifu_diffusion/130/info.txt",
            "links": [
                "https://huggingface.co/ckpt/waifu-diffusion-v1-3/resolve/main/wd-v1-3-float32.ckpt"
            ],
            "model_name": "waifu_diffusion",
            "model_version": "130",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/waifu_diffusion_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "hakurei",
            "images": [
                "https://aica.pages.dev/creators/hakurei/waifu_diffusion/140/1.png",
                "https://aica.pages.dev/creators/hakurei/waifu_diffusion/140/2.png",
                "https://aica.pages.dev/creators/hakurei/waifu_diffusion/140/3.png",
                "https://aica.pages.dev/creators/hakurei/waifu_diffusion/140/4.png"
            ],
            "info": "https://aica.pages.dev/creators/hakurei/waifu_diffusion/140/info.txt",
            "links": [
                "https://huggingface.co/ckpt/waifu-diffusion-v1-4/resolve/main/wd-1-4-anime_e1.ckpt"
            ],
            "model_name": "waifu_diffusion",
            "model_version": "140",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/waifu_diffusion_v1_4_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "hassanblend",
            "images": [
                "https://aica.pages.dev/creators/hassanblend/hassanblend/140/1.png",
                "https://aica.pages.dev/creators/hassanblend/hassanblend/140/2.png",
                "https://aica.pages.dev/creators/hassanblend/hassanblend/140/3.png",
                "https://aica.pages.dev/creators/hassanblend/hassanblend/140/4.png"
            ],
            "info": "https://aica.pages.dev/creators/hassanblend/hassanblend/140/info.txt",
            "links": [
                "https://huggingface.co/ckpt/hassanblend1.4/resolve/main/HassanBlend1.4-Pruned.ckpt"
            ],
            "model_name": "hassanblend",
            "model_version": "140",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/hassan_blend_1_4_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "hesw23168",
            "images": [
                "https://aica.pages.dev/creators/hesw23168/sd_elysium_model/100/1.png",
                "https://aica.pages.dev/creators/hesw23168/sd_elysium_model/100/2.png",
                "https://aica.pages.dev/creators/hesw23168/sd_elysium_model/100/3.png",
                "https://aica.pages.dev/creators/hesw23168/sd_elysium_model/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/hesw23168/sd_elysium_model/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/SD-Elysium-Model/resolve/main/Elysium_Anime_V2.ckpt",
                "https://huggingface.co/ckpt/SD-Elysium-Model/resolve/main/Elysium_Anime_V3.safetensors"
            ],
            "model_name": "sd_elysium_model",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/elysium_anime_2_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "inzamam567",
            "images": [
                "https://aica.pages.dev/creators/inzamam567/any_gape/100/1.png",
                "https://aica.pages.dev/creators/inzamam567/any_gape/100/2.png",
                "https://aica.pages.dev/creators/inzamam567/any_gape/100/3.png",
                "https://aica.pages.dev/creators/inzamam567/any_gape/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/inzamam567/any_gape/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/AnyGape/resolve/main/AnythingGape-fp16.ckpt"
            ],
            "model_name": "any_gape",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/anything_gape_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "its_jay_qz",
            "images": [
                "https://aica.pages.dev/creators/its_jay_qz/synthwave_punk/200/1.png",
                "https://aica.pages.dev/creators/its_jay_qz/synthwave_punk/200/2.png",
                "https://aica.pages.dev/creators/its_jay_qz/synthwave_punk/200/3.png",
                "https://aica.pages.dev/creators/its_jay_qz/synthwave_punk/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/its_jay_qz/synthwave_punk/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/SynthwavePunk-v2/resolve/main/SynthwavePunk-v2.ckpt"
            ],
            "model_name": "synthwave_punk",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/synthwave_punk_v2_webui_colab.ipynb"
            ],
            "tokens": [
                "snthwve style",
                "nvinkpunk"
            ]
        },
        {
            "creator_username": "josephus_cheung",
            "images": [
                "https://aica.pages.dev/creators/josephus_cheung/a_certainty/100/1.png",
                "https://aica.pages.dev/creators/josephus_cheung/a_certainty/100/2.png",
                "https://aica.pages.dev/creators/josephus_cheung/a_certainty/100/3.png",
                "https://aica.pages.dev/creators/josephus_cheung/a_certainty/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/josephus_cheung/a_certainty/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/ACertainty/resolve/main/ACertainty.ckpt"
            ],
            "model_name": "a_certainty",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/a_certainty_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "josephus_cheung",
            "images": [
                "https://aica.pages.dev/creators/josephus_cheung/a_certain_model/100/1.png",
                "https://aica.pages.dev/creators/josephus_cheung/a_certain_model/100/2.png",
                "https://aica.pages.dev/creators/josephus_cheung/a_certain_model/100/3.png",
                "https://aica.pages.dev/creators/josephus_cheung/a_certain_model/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/josephus_cheung/a_certain_model/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/ACertainModel/resolve/main/ACertainModel.ckpt"
            ],
            "model_name": "a_certain_model",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/a_certain_model_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "josephus_cheung",
            "images": [
                "https://aica.pages.dev/creators/josephus_cheung/a_certain_thing/100/1.png",
                "https://aica.pages.dev/creators/josephus_cheung/a_certain_thing/100/2.png",
                "https://aica.pages.dev/creators/josephus_cheung/a_certain_thing/100/3.png",
                "https://aica.pages.dev/creators/josephus_cheung/a_certain_thing/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/josephus_cheung/a_certain_thing/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/ACertainThing/resolve/main/ACertainThing.ckpt"
            ],
            "model_name": "a_certain_thing",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/a_certain_thing_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "mattgroy",
            "images": [
                "https://aica.pages.dev/creators/mattgroy/dream_like_sam_kuvshinov/200/1.png",
                "https://aica.pages.dev/creators/mattgroy/dream_like_sam_kuvshinov/200/2.png",
                "https://aica.pages.dev/creators/mattgroy/dream_like_sam_kuvshinov/200/3.png",
                "https://aica.pages.dev/creators/mattgroy/dream_like_sam_kuvshinov/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/mattgroy/dream_like_sam_kuvshinov/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/dreamlikesamkuvshinov/resolve/main/dreamlikesamkuvshino.safetensors"
            ],
            "model_name": "dream_like_sam_kuvshinov",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/dream_like_sam_kuvshino_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "mehjourney_closed_ai",
            "images": [
                "https://aica.pages.dev/creators/mehjourney_closed_ai/open_anime_journey/100/1.png",
                "https://aica.pages.dev/creators/mehjourney_closed_ai/open_anime_journey/100/2.png",
                "https://aica.pages.dev/creators/mehjourney_closed_ai/open_anime_journey/100/3.png",
                "https://aica.pages.dev/creators/mehjourney_closed_ai/open_anime_journey/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/mehjourney_closed_ai/open_anime_journey/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/OpenAnimeJourney/resolve/main/OpenAnimeJourney.ckpt"
            ],
            "model_name": "open_anime_journey",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/open_anime_journey_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "n75242",
            "images": [
                "https://aica.pages.dev/creators/n75242/monstermash_anyv3/100/1.png",
                "https://aica.pages.dev/creators/n75242/monstermash_anyv3/100/2.png",
                "https://aica.pages.dev/creators/n75242/monstermash_anyv3/100/3.png",
                "https://aica.pages.dev/creators/n75242/monstermash_anyv3/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/n75242/monstermash_anyv3/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/monstermash_anyv3/resolve/main/monstermash4%2Banyv3.safetensors",
                "https://huggingface.co/ckpt/monstermash_anyv3/resolve/main/monstermash6%2Banyv3.safetensors"
            ],
            "model_name": "monstermash_anyv3",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/monstermash_any_3_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "nitrosocke",
            "images": [
                "https://aica.pages.dev/creators/nitrosocke/arcane_diffusion/300/1.png",
                "https://aica.pages.dev/creators/nitrosocke/arcane_diffusion/300/2.png",
                "https://aica.pages.dev/creators/nitrosocke/arcane_diffusion/300/3.png",
                "https://aica.pages.dev/creators/nitrosocke/arcane_diffusion/300/4.png"
            ],
            "info": "https://aica.pages.dev/creators/nitrosocke/arcane_diffusion/300/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Arcane-Diffusion/resolve/main/arcane-diffusion-v3.ckpt"
            ],
            "model_name": "arcane_diffusion",
            "model_version": "300",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/arcane_diffusion_3_webui_colab.ipynb"
            ],
            "tokens": [
                "arcane style"
            ]
        },
        {
            "creator_username": "nitrosocke",
            "images": [
                "https://aica.pages.dev/creators/nitrosocke/mo_di_diffusion/100/1.png",
                "https://aica.pages.dev/creators/nitrosocke/mo_di_diffusion/100/2.png",
                "https://aica.pages.dev/creators/nitrosocke/mo_di_diffusion/100/3.png",
                "https://aica.pages.dev/creators/nitrosocke/mo_di_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/nitrosocke/mo_di_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/mo-di-diffusion/resolve/main/moDi-v1-pruned.ckpt"
            ],
            "model_name": "mo_di_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/mo_di_diffusion_webui_colab.ipynb"
            ],
            "tokens": [
                "modern disney style"
            ]
        },
        {
            "creator_username": "ogkalu",
            "images": [
                "https://aica.pages.dev/creators/ogkalu/comic_diffusion/200/1.png",
                "https://aica.pages.dev/creators/ogkalu/comic_diffusion/200/2.png",
                "https://aica.pages.dev/creators/ogkalu/comic_diffusion/200/3.png",
                "https://aica.pages.dev/creators/ogkalu/comic_diffusion/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/ogkalu/comic_diffusion/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Comic-Diffusion/resolve/main/comic-diffusion-V2.ckpt"
            ],
            "model_name": "comic_diffusion",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/comic_diffusion_v2_webui_colab.ipynb"
            ],
            "tokens": [
                "charliebo artstyle",
                "holliemengert artstyle",
                "marioalberti artstyle",
                "pepelarraz artstyle",
                "andreasrocha artstyle",
                "jamesdaly artstyle"
            ]
        },
        {
            "creator_username": "ogkalu",
            "images": [
                "https://aica.pages.dev/creators/ogkalu/illustration_diffusion/100/1.png",
                "https://aica.pages.dev/creators/ogkalu/illustration_diffusion/100/2.png",
                "https://aica.pages.dev/creators/ogkalu/illustration_diffusion/100/3.png",
                "https://aica.pages.dev/creators/ogkalu/illustration_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/ogkalu/illustration_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Illustration-Diffusion/resolve/main/hollie-mengert.ckpt"
            ],
            "model_name": "illustration_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/illustration_diffusion_webui_colab.ipynb"
            ],
            "tokens": [
                "holliemengert artstyle"
            ]
        },
        {
            "creator_username": "plasmo",
            "images": [
                "https://aica.pages.dev/creators/plasmo/food_crit/100/1.png",
                "https://aica.pages.dev/creators/plasmo/food_crit/100/2.png",
                "https://aica.pages.dev/creators/plasmo/food_crit/100/3.png",
                "https://aica.pages.dev/creators/plasmo/food_crit/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/plasmo/food_crit/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/food-crit/resolve/main/food_crit.ckpt"
            ],
            "model_name": "food_crit",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/food_crit_webui_colab.ipynb"
            ],
            "tokens": [
                "food_crit"
            ]
        },
        {
            "creator_username": "plasmo",
            "images": [
                "https://aica.pages.dev/creators/plasmo/woolitize/100/1.png",
                "https://aica.pages.dev/creators/plasmo/woolitize/100/2.png",
                "https://aica.pages.dev/creators/plasmo/woolitize/100/3.png",
                "https://aica.pages.dev/creators/plasmo/woolitize/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/plasmo/woolitize/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/woolitize/resolve/main/woolitize.ckpt"
            ],
            "model_name": "woolitize",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/woolitize_webui_colab.ipynb"
            ],
            "tokens": [
                "woolitize style"
            ]
        },
        {
            "creator_username": "prompthero",
            "images": [
                "https://aica.pages.dev/creators/prompthero/midjourney_diffusion/400/1.png",
                "https://aica.pages.dev/creators/prompthero/midjourney_diffusion/400/2.png",
                "https://aica.pages.dev/creators/prompthero/midjourney_diffusion/400/3.png",
                "https://aica.pages.dev/creators/prompthero/midjourney_diffusion/400/4.png"
            ],
            "info": "https://aica.pages.dev/creators/prompthero/midjourney_diffusion/400/info.txt",
            "links": [
                "https://huggingface.co/ckpt/midjourney-v4-diffusion/resolve/main/mdjrny-v4.ckpt"
            ],
            "model_name": "midjourney_diffusion",
            "model_version": "400",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/midjourney_v4_diffusion_webui_colab.ipynb"
            ],
            "tokens": [
                "mdjrny-v4 style"
            ]
        },
        {
            "creator_username": "prompthero",
            "images": [
                "https://aica.pages.dev/creators/prompthero/openjourney/200/1.png",
                "https://aica.pages.dev/creators/prompthero/openjourney/200/2.png",
                "https://aica.pages.dev/creators/prompthero/openjourney/200/3.png",
                "https://aica.pages.dev/creators/prompthero/openjourney/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/prompthero/openjourney/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/openjourney-v2/resolve/main/openjourney-v2.ckpt"
            ],
            "model_name": "openjourney",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/openjourney_v2_diffusion_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "public_prompts",
            "images": [
                "https://aica.pages.dev/creators/public_prompts/all_in_one_pixel_model/100/1.png",
                "https://aica.pages.dev/creators/public_prompts/all_in_one_pixel_model/100/2.png",
                "https://aica.pages.dev/creators/public_prompts/all_in_one_pixel_model/100/3.png",
                "https://aica.pages.dev/creators/public_prompts/all_in_one_pixel_model/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/public_prompts/all_in_one_pixel_model/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/All-In-One-Pixel-Model/resolve/main/Public-Prompts-Pixel-Model.ckpt"
            ],
            "model_name": "all_in_one_pixel_model",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/all_in_one_pixel_model_webui_colab.ipynb"
            ],
            "tokens": [
                "pixelsprite",
                "16bitscene"
            ]
        },
        {
            "creator_username": "ray_hell",
            "images": [
                "https://aica.pages.dev/creators/ray_hell/popup_book_diffusion/100/1.png",
                "https://aica.pages.dev/creators/ray_hell/popup_book_diffusion/100/2.png",
                "https://aica.pages.dev/creators/ray_hell/popup_book_diffusion/100/3.png",
                "https://aica.pages.dev/creators/ray_hell/popup_book_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/ray_hell/popup_book_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/popupBook-diffusion/resolve/main/popupBook-diffusion-v1.ckpt"
            ],
            "model_name": "popup_book_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/popup_book_diffusion_webui_colab.ipynb"
            ],
            "tokens": [
                "popupBook"
            ]
        },
        {
            "creator_username": "riffusion",
            "images": [
                "https://aica.pages.dev/creators/riffusion/riffusion_model/100/1.png",
                "https://aica.pages.dev/creators/riffusion/riffusion_model/100/2.png",
                "https://aica.pages.dev/creators/riffusion/riffusion_model/100/3.png",
                "https://aica.pages.dev/creators/riffusion/riffusion_model/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/riffusion/riffusion_model/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/riffusion-model-v1/resolve/main/riffusion-model-v1.ckpt"
            ],
            "model_name": "riffusion_model",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/riffusion_v1_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "runwayml",
            "images": [
                "https://aica.pages.dev/creators/runwayml/stable_diffusion/150/1.png",
                "https://aica.pages.dev/creators/runwayml/stable_diffusion/150/2.png",
                "https://aica.pages.dev/creators/runwayml/stable_diffusion/150/3.png",
                "https://aica.pages.dev/creators/runwayml/stable_diffusion/150/4.png"
            ],
            "info": "https://aica.pages.dev/creators/runwayml/stable_diffusion/150/info.txt",
            "links": [
                "https://huggingface.co/ckpt/sd15/resolve/main/v1-5-pruned-emaonly.ckpt"
            ],
            "model_name": "stable_diffusion",
            "model_version": "150",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable_diffusion_1_5_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "runwayml",
            "images": [
                "https://aica.pages.dev/creators/runwayml/stable_diffusion_inpainting/100/1.png",
                "https://aica.pages.dev/creators/runwayml/stable_diffusion_inpainting/100/2.png",
                "https://aica.pages.dev/creators/runwayml/stable_diffusion_inpainting/100/3.png",
                "https://aica.pages.dev/creators/runwayml/stable_diffusion_inpainting/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/runwayml/stable_diffusion_inpainting/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/i15/resolve/main/sd-v1-5-inpainting.ckpt"
            ],
            "model_name": "stable_diffusion_inpainting",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable_diffusion_inpainting_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "sandro_halpo",
            "images": [
                "https://aica.pages.dev/creators/sandro_halpo/sam_does_art/300/1.png",
                "https://aica.pages.dev/creators/sandro_halpo/sam_does_art/300/2.png",
                "https://aica.pages.dev/creators/sandro_halpo/sam_does_art/300/3.png",
                "https://aica.pages.dev/creators/sandro_halpo/sam_does_art/300/4.png"
            ],
            "info": "https://aica.pages.dev/creators/sandro_halpo/sam_does_art/300/info.txt",
            "links": [
                "https://huggingface.co/ckpt/SamDoesArt-V3/resolve/main/SamDoesArt-V3.ckpt"
            ],
            "model_name": "sam_does_art",
            "model_version": "300",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/samdoesart_diffusion_webui_colab.ipynb"
            ],
            "tokens": [
                "SamDoesArt"
            ]
        },
        {
            "creator_username": "sentet1c",
            "images": [
                "https://aica.pages.dev/creators/sentet1c/rando_mix3/100/1.png",
                "https://aica.pages.dev/creators/sentet1c/rando_mix3/100/2.png",
                "https://aica.pages.dev/creators/sentet1c/rando_mix3/100/3.png",
                "https://aica.pages.dev/creators/sentet1c/rando_mix3/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/sentet1c/rando_mix3/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/RandoMix3/resolve/main/RandoMix3.ckpt"
            ],
            "model_name": "rando_mix3",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/rando_mix_3_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "stabilityai",
            "images": [
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion/200/1.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion/200/2.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion/200/3.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/stabilityai/stable_diffusion/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/stable-diffusion-2/resolve/main/768-v-ema.ckpt"
            ],
            "model_name": "stable_diffusion",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable_diffusion_v2_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "stabilityai",
            "images": [
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion/210/1.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion/210/2.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion/210/3.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion/210/4.png"
            ],
            "info": "https://aica.pages.dev/creators/stabilityai/stable_diffusion/210/info.txt",
            "links": [
                "https://huggingface.co/ckpt/stable-diffusion-2-1/resolve/main/v2-1_768-ema-pruned.ckpt"
            ],
            "model_name": "stable_diffusion",
            "model_version": "210",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable_diffusion_v2_1_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "stabilityai",
            "images": [
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_base/200/1.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_base/200/2.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_base/200/3.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_base/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/stabilityai/stable_diffusion_base/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/stable-diffusion-2-base/resolve/main/512-base-ema.ckpt"
            ],
            "model_name": "stable_diffusion_base",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable_diffusion_v2_base_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "stabilityai",
            "images": [
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_base/210/1.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_base/210/2.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_base/210/3.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_base/210/4.png"
            ],
            "info": "https://aica.pages.dev/creators/stabilityai/stable_diffusion_base/210/info.txt",
            "links": [
                "https://huggingface.co/ckpt/stable-diffusion-2-1-base/resolve/main/v2-1_512-ema-pruned.ckpt"
            ],
            "model_name": "stable_diffusion_base",
            "model_version": "210",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable_diffusion_v2_1_base_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "stabilityai",
            "images": [
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_depth/200/1.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_depth/200/2.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_depth/200/3.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_depth/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/stabilityai/stable_diffusion_depth/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/stable-diffusion-2-depth/resolve/main/512-depth-ema.ckpt"
            ],
            "model_name": "stable_diffusion_depth",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable_diffusion_v2_depth_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "stabilityai",
            "images": [
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_inpainting/200/1.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_inpainting/200/2.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_inpainting/200/3.png",
                "https://aica.pages.dev/creators/stabilityai/stable_diffusion_inpainting/200/4.png"
            ],
            "info": "https://aica.pages.dev/creators/stabilityai/stable_diffusion_inpainting/200/info.txt",
            "links": [
                "https://huggingface.co/ckpt/stable-diffusion-2-inpainting/resolve/main/512-inpainting-ema.ckpt"
            ],
            "model_name": "stable_diffusion_inpainting",
            "model_version": "200",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/stable_diffusion_v2_inpainting_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "thecollector",
            "images": [
                "https://aica.pages.dev/creators/thecollector/sam_does_sexy_blend/100/1.png",
                "https://aica.pages.dev/creators/thecollector/sam_does_sexy_blend/100/2.png",
                "https://aica.pages.dev/creators/thecollector/sam_does_sexy_blend/100/3.png",
                "https://aica.pages.dev/creators/thecollector/sam_does_sexy_blend/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/thecollector/sam_does_sexy_blend/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/samdoessexy-blend/resolve/main/samdoessexyBlend.safetensors"
            ],
            "model_name": "sam_does_sexy_blend",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/samdoessexy_blend_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "unknown",
            "images": [
                "https://aica.pages.dev/creators/unknown/anything/300/1.png",
                "https://aica.pages.dev/creators/unknown/anything/300/2.png",
                "https://aica.pages.dev/creators/unknown/anything/300/3.png",
                "https://aica.pages.dev/creators/unknown/anything/300/4.png"
            ],
            "info": "https://aica.pages.dev/creators/unknown/anything/300/info.txt",
            "links": [
                "https://huggingface.co/ckpt/anything-v3.0/resolve/main/Anything-V3.0-pruned.ckpt"
            ],
            "model_name": "anything",
            "model_version": "300",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/anything_3_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "unknown",
            "images": [
                "https://aica.pages.dev/creators/unknown/elldreths_lucid_mix/100/1.png",
                "https://aica.pages.dev/creators/unknown/elldreths_lucid_mix/100/2.png",
                "https://aica.pages.dev/creators/unknown/elldreths_lucid_mix/100/3.png",
                "https://aica.pages.dev/creators/unknown/elldreths_lucid_mix/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/unknown/elldreths_lucid_mix/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/elldrethSLucidMix_v10/resolve/main/elldrethSLucidMix_v10.ckpt"
            ],
            "model_name": "elldreths_lucid_mix",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/elldreths_lucid_mix_v10_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "unknown",
            "images": [
                "https://aica.pages.dev/creators/unknown/f222/100/1.png",
                "https://aica.pages.dev/creators/unknown/f222/100/2.png",
                "https://aica.pages.dev/creators/unknown/f222/100/3.png",
                "https://aica.pages.dev/creators/unknown/f222/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/unknown/f222/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/f2/resolve/main/f2.ckpt"
            ],
            "model_name": "f222",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/f222_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "unknown",
            "images": [
                "https://aica.pages.dev/creators/unknown/grapefruit/100/1.png",
                "https://aica.pages.dev/creators/unknown/grapefruit/100/2.png",
                "https://aica.pages.dev/creators/unknown/grapefruit/100/3.png",
                "https://aica.pages.dev/creators/unknown/grapefruit/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/unknown/grapefruit/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/grapefruit/resolve/main/grapefruit.safetensors"
            ],
            "model_name": "grapefruit",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/grapefruit_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "unknown",
            "images": [
                "https://aica.pages.dev/creators/unknown/iz/100/1.png",
                "https://aica.pages.dev/creators/unknown/iz/100/2.png",
                "https://aica.pages.dev/creators/unknown/iz/100/3.png",
                "https://aica.pages.dev/creators/unknown/iz/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/unknown/iz/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/iz/resolve/main/izumi_01.ckpt"
            ],
            "model_name": "iz",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/izumi_v1_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "unknown",
            "images": [
                "https://aica.pages.dev/creators/unknown/protogen/220/1.png",
                "https://aica.pages.dev/creators/unknown/protogen/220/2.png",
                "https://aica.pages.dev/creators/unknown/protogen/220/3.png",
                "https://aica.pages.dev/creators/unknown/protogen/220/4.png"
            ],
            "info": "https://aica.pages.dev/creators/unknown/protogen/220/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Protogen_V2.2/resolve/main/Protogen_V2.2.ckpt"
            ],
            "model_name": "protogen",
            "model_version": "220",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/protogen_v2_2_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "unknown",
            "images": [
                "https://aica.pages.dev/creators/unknown/rbm/100/1.png",
                "https://aica.pages.dev/creators/unknown/rbm/100/2.png",
                "https://aica.pages.dev/creators/unknown/rbm/100/3.png",
                "https://aica.pages.dev/creators/unknown/rbm/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/unknown/rbm/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/rbm/resolve/main/rbm.ckpt"
            ],
            "model_name": "rbm",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/berry_mix_1_5_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "unknown",
            "images": [
                "https://aica.pages.dev/creators/unknown/urp/100/1.png",
                "https://aica.pages.dev/creators/unknown/urp/100/2.png",
                "https://aica.pages.dev/creators/unknown/urp/100/3.png",
                "https://aica.pages.dev/creators/unknown/urp/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/unknown/urp/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/urp/resolve/main/uberRealisticPornMer_urpMv1_ema.ckpt"
            ],
            "model_name": "urp",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/uber_realistic_v1_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "warrior_mama777",
            "images": [
                "https://aica.pages.dev/creators/warrior_mama777/orange_mixs/100/1.png",
                "https://aica.pages.dev/creators/warrior_mama777/orange_mixs/100/2.png",
                "https://aica.pages.dev/creators/warrior_mama777/orange_mixs/100/3.png",
                "https://aica.pages.dev/creators/warrior_mama777/orange_mixs/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/warrior_mama777/orange_mixs/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/OrangeMixs/resolve/main/AbyssOrangeMix2_nsfw.safetensors",
                "https://huggingface.co/ckpt/OrangeMixs/resolve/main/AbyssOrangeMix2_hard.safetensors",
                "https://huggingface.co/ckpt/OrangeCocoaMix/resolve/main/OrangeCocoaMix2_hard.safetensors"
            ],
            "model_name": "orange_mixs",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/abyss_orange_mix_2_webui_colab.ipynb"
            ],
            "tokens": []
        },
        {
            "creator_username": "wavymulder",
            "images": [
                "https://aica.pages.dev/creators/wavymulder/analog_diffusion/100/1.png",
                "https://aica.pages.dev/creators/wavymulder/analog_diffusion/100/2.png",
                "https://aica.pages.dev/creators/wavymulder/analog_diffusion/100/3.png",
                "https://aica.pages.dev/creators/wavymulder/analog_diffusion/100/4.png"
            ],
            "info": "https://aica.pages.dev/creators/wavymulder/analog_diffusion/100/info.txt",
            "links": [
                "https://huggingface.co/ckpt/Analog-Diffusion/resolve/main/analog-diffusion-1.0.ckpt"
            ],
            "model_name": "analog_diffusion",
            "model_version": "100",
            "online": [
                "https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/analog_diffusion_webui_colab.ipynb"
            ],
            "tokens": [
                "analog style"
            ]
        }
    ]
  });