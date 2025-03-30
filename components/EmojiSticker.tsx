import { Image, type ImageSource } from "expo-image";
import { View } from "react-native";

interface EmojiStickerProps {
  imageSize: number;
  stickerSource: ImageSource;
}

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: EmojiStickerProps) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
