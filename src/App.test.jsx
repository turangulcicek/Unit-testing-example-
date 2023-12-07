import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "./App";
import user from "@testing-library/user-event";

it("uygulama doğru şekilde çalışıyor mu?", async () => {
  user.setup();
  render(<App />);
  //   gerekli bileşenler
  const nameInp = screen.getByPlaceholderText("Type your name...");
  const mailInp = screen.getByLabelText(/email/i);
  const ageInp = screen.getByLabelText(/age/i);
  const button = screen.getByRole("button", { name: /add user/i });
  //   formu doldur
  await user.type(nameInp, "veli");
  await user.type(mailInp, "veli@gmail.com");
  await user.type(ageInp, "22");
  //   form gönderme
  //   butona tıkla
  await user.click(button);
  //isim,yaş ve mail değerlerine karşılık gelen hücreler ekrana basıldı mı?
  screen.getByRole("cell", { name: "veli" });
  screen.getByRole("cell", { name: "veli@gmail.com" });
  screen.getByRole("cell", { name: "22" });
});

// uygulama dışı bir örnek

const multiply = (a, b, c) => {
  return a * b * c;
};
// describe bir testin farklı durumlarını veya bir bileşenin farklı özellikleri bir arada toplamak için kullanılır
describe("fonksiyon farklı durumlarda doğru çalışır", () => {
  it("pozitif sayı gönderildiğinde fonk. doğru çalışır", () => {
    expect(multiply(10, 2, 3)).toBe(60);
  });
  it("negatif sayı gönderildiğinde  fonk. doğru çalışır", () => {
    expect(multiply(10, -2, 3)).toBe(-60);
  });
  it("0 gönderildiğinde fonk. doğru çalışır", () => {
    expect(multiply(10, 0, 3)).toBe(0);
  });
});
