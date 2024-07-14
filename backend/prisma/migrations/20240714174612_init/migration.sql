-- CreateTable
CREATE TABLE `Motorista` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(11) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `vencimentoCnh` DATETIME(3) NOT NULL,
    `categoriaCnh` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Motorista_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veiculo` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(7) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `cor` VARCHAR(191) NOT NULL,
    `motoristaId` INTEGER NOT NULL,

    UNIQUE INDEX `Veiculo_placa_key`(`placa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Multa` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `valor` DOUBLE NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `pontos` INTEGER NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `veiculoId` INTEGER NOT NULL,
    `motoristaId` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Veiculo` ADD CONSTRAINT `Veiculo_motoristaId_fkey` FOREIGN KEY (`motoristaId`) REFERENCES `Motorista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Multa` ADD CONSTRAINT `Multa_veiculoId_fkey` FOREIGN KEY (`veiculoId`) REFERENCES `Veiculo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Multa` ADD CONSTRAINT `Multa_motoristaId_fkey` FOREIGN KEY (`motoristaId`) REFERENCES `Motorista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
