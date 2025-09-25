import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NavLink } from "react-router";
import { getImageByIdentifier } from "@/lib/utils";

const Index = () => {
  // 不同匹配方式的示例
  const examples = [
    {
      title: "按文件名匹配",
      identifier:
        "Apple_WANG-Lu-working-in-his-studio-in-Beijing_Full-Bleed-Image.jpg.small_2x.jpg",
      image: getImageByIdentifier(
        "Apple_WANG-Lu-working-in-his-studio-in-Beijing_Full-Bleed-Image.jpg.small_2x.jpg"
      ),
    },
    {
      title: "按标签匹配（音乐制作）",
      identifier: "音乐制作",
      image: getImageByIdentifier("音乐制作"),
    },
    {
      title: "按类别匹配（artist）",
      identifier: "artist",
      image: getImageByIdentifier("artist"),
    },
    {
      title: "按人物匹配（WANG Lu）",
      identifier: "WANG Lu",
      image: getImageByIdentifier("WANG Lu"),
    },
    {
      title: "随机图片（不传参数）",
      identifier: "无",
      image: getImageByIdentifier(),
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">图片匹配策略示例</h1>
        <NavLink to="/second" end className="text-blue-500 hover:underline">
          前往第二页
        </NavLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {examples.map((example, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
            <p className="text-sm text-gray-600 mb-3">
              匹配参数: {example.identifier}
            </p>

            <div className="mb-4">
              <img
                src={example.image.src}
                alt={example.image.info.description}
                className="w-full h-48 object-cover rounded-md"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/400/300";
                }}
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm">
                <strong>描述:</strong> {example.image.info.description}
              </p>

              <div>
                <strong className="text-sm">标签:</strong>
                <div className="flex flex-wrap gap-1 mt-1">
                  {example.image.info.tags?.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {example.image.info.tags &&
                    example.image.info.tags.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{example.image.info.tags.length - 3} 更多
                      </span>
                    )}
                </div>
              </div>

              {example.image.info.people &&
                example.image.info.people.length > 0 && (
                  <p className="text-sm">
                    <strong>人物:</strong>{" "}
                    {example.image.info.people.join(", ")}
                  </p>
                )}

              <p className="text-sm">
                <strong>类别:</strong> {example.image.info.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">UI组件示例</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="default">Click me</Button>
          <Input placeholder="输入内容" className="w-48" />
          <Checkbox />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">打开对话框</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>确认操作</DialogTitle>
                <DialogDescription>
                  此操作无法撤销。这将永久删除您的账户并从我们的服务器中移除您的数据。
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
export default Index;
