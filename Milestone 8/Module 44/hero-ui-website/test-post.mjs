(async () => {
  try {
    const mod = await import("./src/lib/task.js");
    const { getUserInfo, postUserInfo } = mod;
    const before = await getUserInfo();
    console.log("before length", before.length);
    const res = await postUserInfo({
      name: "Test User",
      email: "test@example.com",
      phone: "1234567",
      message: "hello",
    });
    console.log("post result", res);
    const after = await getUserInfo();
    console.log("after length", after.length);
    console.log("last user", after[after.length - 1]);
  } catch (err) {
    console.error("error", err);
  }
})();
