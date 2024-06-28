import { BlockImpl, BlockServiceImpl } from "@/blip/block/block";
import { BlockBuilder } from "@/blip/block/block-builder";
import { expect, it, describe } from "@jest/globals";

describe("Block: Suite de testes", () => {
  it("Deve criar um novo bloco vazio", () => {
    // Arrange
    const expectedBlock = new BlockBuilder().create().build();
    const blockService = new BlockServiceImpl(expectedBlock);

    //Act
    const block = blockService.create(expectedBlock);
    //Assert

    expect(block).toStrictEqual(expectedBlock);
  });
  it("Deve criar um novo bloco com informações pre-existentes", () => {});
});
